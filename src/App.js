import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

function App() {

  useEffect(() => {
    document.title = 'React Portfolio';
  }, []);
  
  return (
    <div>
      <Navbar />
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
