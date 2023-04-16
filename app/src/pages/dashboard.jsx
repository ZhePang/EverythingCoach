import { useWallet } from "@solana/wallet-adapter-react"
import { PhantomWalletName } from "@solana/wallet-adapter-wallets"
import { useEffect, useState } from "react"
import { Button } from "src/components/Button"
import { PostForm } from "src/components/PostForm"
import { useBlog } from "src/context/Blog"
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';



export const Dashboard = () => {
  const history = useHistory()
  const [connecting, setConnecting] = useState(false)
  const { connected, select } = useWallet()
  const [postTitle, setPostTitle] = useState("")
  const [postContent, setPostContent] = useState("")

  const { user, initialized, initUser, posts, createPost, showModal, setShowModal } = useBlog()

 


  /////////////////

  const onConnect = () => {
    setConnecting(true)
    select(PhantomWalletName)
  }

  useEffect(() => {
    if (user) {
      setConnecting(false)
    }
  }, [user])

  return (
    <div className="dashboard background-color overflow-auto h-screen">
      <header className="fixed z-10 w-full h-14  shadow-md">
        <div className="flex justify-between items-center h-full container">
          <h2 className="text-2xl font-bold">
            <div className="bg-clip-text bg-gradient-to-br from-indigo-300 colorpink"
            >
              EverythingCoach
            </div>
          </h2>
          {connected ? (
            <div className="flex items-center">
              <Link to="/leaderboard" className=" font-bold text-sm ml-2 capitalize underlinepink">
                LeaderBoard
              </Link>
              <Link to="/sessions" className=" font-bold text-sm ml-2 capitalize underlinepink">
                Sessions
              </Link>
              <p className=" font-bold text-sm ml-2 capitalize mr-4 underlinepink">
                All
              </p>
              <img
                src={user?.avatar}
                alt="avatar"
                className="w-8 h-8 rounded-full bg-gray-200 shadow ring-2 ring-indigo-400 ring-offset-2 ring-opacity-50"
              />
              <p className=" font-bold text-sm ml-2 capitalize">
                {user?.name}
              </p>
              {initialized ? (
                <Button
                  className="ml-3 mr-2"
                  onClick={() => {
                    setShowModal(true)
                  }}
                >
                  Make a Post
                </Button>
              ) : (
                <Button
                  className="ml-3 mr-2"
                  onClick={() => {
                    initUser()
                  }}
                >
                  Initialize User
                </Button>
              )}

            </div>
          ) : (
            <Button
              loading={connecting}
              className="w-28"
              onClick={onConnect}
              leftIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              }
            >
              Connect
            </Button>
          )}
        </div>
      </header>
      <main className="dashboard-main pb-4 container flex relative">
        <div className="pt-3">
          {/* <h1 className="title">The Blog</h1> */}
          <div className="row">

            <article className="best-post">
              <div className="post-box">
                <div className="best-post-content">
                  <div className="best-post-content-cat">May 2, 2023<span className="dot"> </span>Post for Help</div>
                  <Link to="/fullpostsample">
                    <div className="best-post-content-title">
                      Seeking a JavaScript Mentor to Help with Bug Fixing
                    </div>
                  </Link>
                  <div className="best-post-content-sub">
                    I'm currently working on a JavaScript project and have come across a bug that I can't seem to fix on my own. I'm reaching out to see if anyone would be willing to mentor me through this process and help me find a solution.

                    If you have experience with JavaScript and are available to provide some guidance, please let me know. I'm open to any suggestions or tips that could help me resolve this issue.
                  </div>
                </div>
              </div>
            </article>


            <div className="all__posts">
              {posts.map((item) => {

                return (
                  <Link
                    to={`/read-post/${item.publicKey.toString()}`}
                    key={item.account.id}
                    className="post__card-2"
                  >
                    <article className="post__card-2"
                      onClick={() => {
                        history.push(`/read-post/${item.publicKey.toString()}`)
                      }}
                      key={item.account.id}
                    >
                      <div className="post__card_-2">

                        <div>
                          <div className="post__card_meta-2">
                            <div className="post__card_cat">May 2, 2023<span className="dot"> </span>{item.account.title} </div>
                            <p className="post__card_alttitle-2">
                              {item.account.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        <div className={`modal ${showModal && 'show-modal'}`} >
          <div className="modal-content">
            <span className="close-button"
              onClick={() => setShowModal(false)}
            >×</span>
            <PostForm
              postTitle={postTitle}
              postContent={postContent}
              setPostTitle={setPostTitle}
              setPostContent={setPostContent}
              onSubmit={() => createPost(postTitle, postContent)}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
