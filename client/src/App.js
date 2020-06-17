import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import ContentWrapper from "./components/ContentWrapper"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Footer from "./components/Footer"


function App() {
  return (
  
  <Router>
    <div>
   <Navbar />
   <Switch>
    <Route exact path={["/profile"]} component={Profile} />
    </Switch>
   <ContentWrapper />
   <Dashboard />
   <Footer />
   </div>
   </Router>

  );
}

export default App;


