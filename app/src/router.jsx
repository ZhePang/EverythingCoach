import { FC } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { FullPost } from "./pages/fullpost"
import { Dashboard } from "src/pages/dashboard"
import { LeaderboardPage } from "./pages/leaderboardPage"; 
import { FullPost1 } from "./pages/fullpostsample"
import { ProfilePage } from "./pages/profile"
import { ChatPage } from "./pages/chat"
import { SessionPage } from "./pages/sessions"
import { SchedulePage } from "./pages/schedule"

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/read-post/:id" >
          <FullPost />
        </Route>
        <Route path="/leaderboard"> 
          <LeaderboardPage />
        </Route>
        <Route path="/fullpostsample"> 
          <FullPost1 />
        </Route>
        <Route path="/profile"> 
          <ProfilePage />
        </Route>
        <Route path="/chat"> 
          <ChatPage />
        </Route>
        <Route path="/sessions"> 
          <SessionPage />
        </Route>
        <Route path="/schedule"> 
          <SchedulePage />
        </Route>
        
      </Switch>
    </BrowserRouter>
  )
}