import React, {Component} from 'react';
import AddProductpage from './AddProductPage';
import { Link } from 'react-router-dom'

function HomePage () {
 
      return (
          <div className="App">
            <header className="App-header">
            <div className='container'>
                <h1>Start Page</h1>
                <Link to='/'><h4>Home</h4></Link>
                <Link to='/AllProductsPage'><h4>Product</h4></Link>
                {/* <button className='updateButton' type='submit' onClick={this.postProduct}>Add new product</button> */}
            </div>
          </header>
          </div>
      );
    }
  
    
  export default HomePage;