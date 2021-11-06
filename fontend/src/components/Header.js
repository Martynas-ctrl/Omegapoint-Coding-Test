import React from 'react';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import './css/header.css';

const Header = () => {

  return (
    <div>
        <header className="l-header">

            <Helmet>
                <title>Omegapoint Coding Test</title>
            </Helmet>

            <div className="container">
                <Link to='/'><h3>Home</h3></Link>
                <Link to='/AllProductsPage'><h3>Product</h3></Link>
            </div>

        </header>
    </div>
  );
};

export default Header;