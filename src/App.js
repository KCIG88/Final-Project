import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/index"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Footer from "./components/Footer"
// import { useAuth0 } from "./react-auth0-spa";
// import history from "../src/utils/history"
import NFL from "./pages/NFL";
import NCAA from "./pages/NCAA";
import MLB from "./pages/MLB";
import EPL from "./pages/EPL";
import LALIGA from "./pages/LALIGA";
import BUNDESLIGA from "./pages/BUNDESLIGA";
import AddBalance from "./pages/AddBalance";
import PlaceBet from './pages/PlaceBet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header>
              <Navbar />
            </header>
            <Switch>
              <Route exact path={["/profile"]}>
                <Profile />
              </Route>
              <Route exact path={["/addbalance"]}>
                <AddBalance />
              </Route>
              <Route exact path={["/placebet"]}>
                <PlaceBet />
              </Route>
              <Route exact path={["/nfl"]}>
                <NFL />
              </Route>
              <Route exact path={["/ncaa"]}>
                <NCAA />
              </Route>
              <Route exact path={["/mlb"]}>
                <MLB />
              </Route>
              <Route exact path={["/epl"]}>
                <EPL />
              </Route>
              <Route exact path={["/LALIGA"]}>
                <LALIGA />
              </Route>
              <Route exact path={["/BUNDESLIGA"]}>
                <BUNDESLIGA />
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
}
export default App;

