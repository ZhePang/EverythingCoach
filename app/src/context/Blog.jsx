import { createContext, useContext, useMemo, useEffect, useState } from "react";
import * as anchor from '@project-serum/anchor';
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { getAvatarUrl } from "src/functions/getAvatarUrl";
import { getRandomName } from "src/functions/getRandomName"
import idl from "src/idl.json"
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";

const BlogContext = createContext();

// Get Program Key
const PROGRAM_KEY = new PublicKey(idl.metadata.address)

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("Parent must be wrapped inside PostsProvider");
  }

  return context;
};

export const BlogProvider = ({ children }) => {

  const [user, setUser] = useState()
  const [initialized, setInitialized] = useState(false)
  const [transactionPending, setTransactionPending] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [lastPostId, setLastPostId] = useState(0)
  const [posts, setPosts] = useState([])

  const anchorWallet = useAnchorWallet()
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  if (publicKey != null) {
    console.log(publicKey.toString())
  }

  const program = useMemo(()=> {
    if(anchorWallet) {
      const provider = new anchor.AnchorProvider(connection, anchorWallet, anchor.AnchorProvider.defaultOptions())
      return new anchor.Program(idl, PROGRAM_KEY, provider)
    }
  }, [connection, anchorWallet])

  console.log(program, "PROGRAM HERE")

  useEffect(()=> {

    const start = async () => {
      console.log("Starting app and fetching data")
      // check if there is a user
      // If there is user FETCH POSTS
      // If no user set state to false (need a button to init user)
      if(program && publicKey) {
        try {
          const [userPda] = await findProgramAddressSync([utf8.encode('user'), publicKey.toBuffer()], program.programId)
          const user = await program.account.userAccount.fetch(userPda)
          if(user) {
            setInitialized(true) // create post
            setUser(user)
            setLastPostId(user.lastPostId)

            const postAccounts = await program.account.postAccount.all()
            setPosts(postAccounts)
          }
        } catch(err) {
          console.log("No User")
          setInitialized(false) // initialize user
        }
      }
    }

    start()
  }, [program, publicKey, transactionPending])

  const initUser = async () => {
    if(program && publicKey) {
      try {
        setTransactionPending(true)
        const name = getRandomName()
        const avatar = getAvatarUrl(name)
        const [userPda] = findProgramAddressSync([utf8.encode('user'), publicKey.toBuffer()], program.programId)

        await program.methods
        .initUser(name, avatar)
        .accounts({
          userAccount: userPda,
          authority: publicKey,
          systemProgram: SystemProgram.programId
        })
        .rpc()
        setInitialized(true)
      } catch(err) {
        console.log(err)
      } finally {
        setTransactionPending(false)
      }
    }
  }

  const createPost = async (title, content) => {
    if(program && publicKey) {
      setTransactionPending(true)
      try {
        const [userPda] = findProgramAddressSync([utf8.encode('user'), publicKey.toBuffer()], program.programId)
        const [postPda] = findProgramAddressSync([utf8.encode('post'), publicKey.toBuffer(), Uint8Array.from([lastPostId])], program.programId)

        await program.methods
          .createPost(title, content)
          .accounts({
            userAccount: userPda,
            postAccount: postPda,
            authority: publicKey,
            systemProgram: SystemProgram.programId,
          })
          .rpc()

        setShowModal(false)

      } catch(err) {
        console.log(err)
      } finally {
        setTransactionPending(false)
      }
    }
  }

  return (
    <BlogContext.Provider
      value={{
        user,
        initialized,
        initUser,
        posts,
        createPost,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
