import React from 'react';
// import img from './Images/game store logo.svg';
// import Search from './Search';
import AddProduct from './AddProduct';
import { Link } from 'react-router-dom'
import './css/Header.css';
// import './css/Search.css';
    
const Header = () => {
  return (
      <div className="header">
        <div className="container">
          {/* <img src={img} className="logo" alt="website logo"></img> */}
          <h1>Start Page</h1>
                <Link to='/'><h4>Home</h4></Link>
                <Link to='/AllProductsPage'><h4>Product</h4></Link>
                {/* <button className='updateButton' type='submit' onClick={this.postProduct}>Add new product</button> */}
        </div>

          <AddProduct />  
          
      </div>
  );
};

export default Header;