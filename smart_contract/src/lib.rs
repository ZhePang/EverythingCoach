use anchor_lang::prelude::*;

pub mod constant;
pub mod states;
use crate::{constant::*, states::*};

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("5BVwQwyowwtNBzUdekJ7SUKnV1URjWxaAgxVU1PkiTJx");

#[program]
pub mod coach_sol {
    use super::*;

    pub fn init_user(ctx: Context<InitUser>, name: String, avatar: String) -> Result<()> {
        let user_account = &mut ctx.accounts.user_account;
        let authority = &mut ctx.accounts.authority;

        user_account.name = name;
        user_account.avatar = avatar;
        user_account.last_post_id = 0;
        user_account.post_count = 0;
        user_account.authority = authority.key();

        Ok(())
    }

    pub fn create_post(ctx: Context<CreatePost>, title: String, content: String) -> Result<()> {
        let post_account = &mut ctx.accounts.post_account;
        let user_account = &mut ctx.accounts.user_account;
        let authority = &mut ctx.accounts.authority;

        post_account.id = user_account.last_post_id;
        post_account.title = title;
        post_account.content = content;
        post_account.user = user_account.key();
        post_account.authority = authority.key();

        user_account.last_post_id = user_account.last_post_id
            .checked_add(1)
            .unwrap();

        user_account.post_count = user_account.post_count
            .checked_add(1)
            .unwrap();

        Ok(())
    }

    pub fn sign_contract(ctx: Context<SignContract>) -> Result<()> {
        let user_account_1 = &mut ctx.accounts.payer_account;
        let user_account_2 = &mut ctx.accounts.payee_account;
        let contract_account = &mut ctx.accounts.contract_account;

        // Check that the two users are different
        if user_account_1.key() == user_account_2.key() {
            return Err(ProgramError::InvalidArgument);
        }

        // Set the users on the contract
        contract_account.payer = user_account_1.key();
        contract_account.payee = user_account_2.key();

        Ok(())
    }
}

#[derive(Accounts)]
#[instruction()]
pub struct InitUser<'info> {
    #[account(
        init,
        seeds = [USER_SEED, authority.key().as_ref()],
        bump,
        payer = authority,
        space = 2312 + 8
    )]
    pub user_account: Account<'info, UserAccount>, 

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction()]
pub struct CreatePost<'info> {
    #[account(
        init,
        seeds = [POST_SEED, authority.key().as_ref(), &[user_account.last_post_id as u8].as_ref()],
        bump,
        payer = authority,
        space = 2376 + 8
    )]
    pub post_account: Account<'info, PostAccount>,

    #[account(
        mut,
        seeds = [USER_SEED, authority.key().as_ref()],
        bump,
        has_one = authority
    )]
    pub user_account: Account<'info, UserAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction()]
pub struct SignContract<'info> {
    #[account(
        mut,
        seeds = [USER_SEED, authority.key().as_ref()],
        bump,
        has_one = authority
    )]
    pub payer_account: Account<'info, UserAccount>,

    #[account(
        mut,
        seeds = [USER_SEED, authority.key().as_ref()],
        bump,
        has_one = authority
    )]
    pub payee_account: Account<'info, UserAccount>,

    #[account(
        init,
        seeds = [CONTRACT_SEED, authority.key().as_ref(), user_account_1.key().as_ref(), user_account_2.key().as_ref()],
        bump,
        payer = authority,
        space = 32
    )]
    pub contract_account: Account<'info, ContractAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}
