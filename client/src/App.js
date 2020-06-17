import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import ContentWrapper from "./components/ContentWrapper"
import Dashboard from "./pages/Dashboard"

import Footer from "./components/Footer"


function App() {
  return (
  <>
   <Navbar />
   <ContentWrapper />
   <Dashboard />
   <Footer />
</>
  );
}

export default App;