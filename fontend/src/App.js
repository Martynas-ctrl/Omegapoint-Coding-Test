import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import HomePage from './components/HomePage';
import AllProductsPage from './components/AllProductsPage';
import DetailsPage from './components/DetailsPage';
import Header from './components/Header'
import './App.css';

function App () {
  
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className='container'>
              <Header />
            </div>
          </header>
          <main>
            <Route path='/' exact render={ () =>  <HomePage/> } />
            <Route path='/AllProductsPage' render= { () => <AllProductsPage/>} />
            <Route path='/DetailsPage/:id' render = { () => <DetailsPage/>} />
         </main>
         <footer style={{backgroundColor: 'rgba(255, 255, 255, 0.90)'}}>
          <span><a id='a' href='https://github.com/Martynas-ctrl/Omegapoint-Coding-Test' target='_blank'>Se koden på Gihub </a></span>
         </footer>
        </div>
      </Router>
    );
}
  
export default App;