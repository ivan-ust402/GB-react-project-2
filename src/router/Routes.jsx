import { Route, Routes } from "react-router-dom"
import { Chats } from "../components/Chats/Chats"

export const MainRouter = () => {
  return (
      <Routes>
        <Route exact path="/">
          {" "}
          <Home />
        </Route>
        <Route path="/profile">
          {" "}
          <Profile />
        </Route>
        <Route exact path="/chats">
          <Chats />{" "}
        </Route>
      </Routes>
  )
}
