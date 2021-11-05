import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

    
const Header = () => {

  return (
    <div>
        <header className="l-header">

            <Helmet>
                <title>Omegapoint Coding Test</title>
            </Helmet>

            <nav className='navbar'>
                <div className="max-width" style={{textAlign: 'center'}}>
                    <div className="logo"><a href="#">Product<span>Page.</span></a></div>
                    <ul className="menu"> 
                        <li><Link to='/'><h4>Home</h4></Link></li>
                        <li><Link to='/AllProductsPage'><h4>Product</h4></Link></li>
                    </ul>
                </div>
            </nav>

        </header>

    </div>
  );
};

export default Header;