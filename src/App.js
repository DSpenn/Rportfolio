import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import './App.css';

function App() {

  useEffect(() => {
    document.title = 'React Portfolio';
  }, []);
  
  return (
    <div className="App">
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
