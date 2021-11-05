import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
// import test1 from './components/images/test41.jpg';

import HomePage from './components/HomePage';
import AllProductsPage from './components/AllProductsPage';
import DetailsPage from './components/DetailsPage';
import Header from './components/Header'

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
         <footer style={{backgroundColor: '#F9A826'}}>
          <span><a  style={{color: '#fff'}} href='https://github.com/Martynas-ctrl/Omegapoint-Coding-Test' target='_blank'>Se koden på Gihub </a></span>
        </footer>
        </div>
      </Router>
    );
}
  
export default App;