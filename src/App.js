import React, { useEffect } from 'react';
import PortfolioContainer from './components/PortfolioContainer';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  useEffect(() => {
    document.title = 'React Portfolio';
  }, []);
  
  return (
    <div className='App'>
      <Header />
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
