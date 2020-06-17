import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import ContentWrapper from "./components/ContentWrapper"
import Home from "./pages/Home"
import Footer from "./components/Footer"


function App() {
  return (
  <>
   <Navbar />
   <ContentWrapper />
   <Home />
   <Footer />
</>
  );
}

export default App;