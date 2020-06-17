import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Footer from "./components/Footer"


function App() {
  return (

    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path={["/profile"]}> component={Profile} />
          <Profile />
          </Route>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route>
            <Dashboard />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router >

  );
}

export default App;


