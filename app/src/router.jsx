import { FC } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { FullPost } from "./pages/fullpost"
import { Dashboard } from "src/pages/dashboard"
import { LeaderboardPage } from "./pages/leaderboardPage"; 
import { FullPost1 } from "./pages/fullpostsample"

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
        
      </Switch>
    </BrowserRouter>
  )
}