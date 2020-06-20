import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "../src/Navbar/index"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Footer from "./components/Footer"
import { useAuth0 } from "../src/react-auth0-spa";
import history from "../src/utils/history"

function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <Router>
        <div>
          <Router history={history}>
          </Router>
          <header>
            <Navbar />
          </header>
          <Switch>

            <Route exact path={["/profile"]}>
              <Profile />
            </Route>

            <Route exact path={["/signin"]} >
              <SignIn />
            </Route>
            <Route exact path={["/signup"]}>
              <SignUp />
            </Route>

            <Route exact path={["/", "/home"]}>
              <Dashboard />
            </Route>

          </Switch>
          <Footer />
        </div>
      </Router >
    </div>

  );
}

export default App;


