import Home from "./pages/home/Home";
import Topbar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const { user } = useContext(Context);
  return (

    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
        {user ? <Home /> : <Contact />}
        </Route>
        <Route path="/about">
        {user ? <Home /> : <About/>}
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Login />}
        </Route>
        <Route path="/settings">
          {user ? <Settings /> : <Login />}
        </Route>
        
      </Switch>
    </Router>

  );
}

export default App;
