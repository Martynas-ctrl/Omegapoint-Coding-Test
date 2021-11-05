import React, {useState, useEffect} from 'react';
// import img from './Images/game store logo.svg';
// import Search from './Search';
import AddProduct from './AddProduct';
import { Link } from 'react-router-dom'
// import './css/Header.css';
import test1 from './images/test41.jpg';
// import './css/Search.css';
    
const Header = () => {

  const [navbar, setNavbar] = useState(false);
  const [menuIcon, setMenuIcon] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
      <div>
    <header className="l-header">
    {/* <Helmet>
        <title>Portfolio</title>
    </Helmet> */}


 {/* <!-- navbar section start --> */}

    <nav style={{backgroundImage: `url(${test1}`}} className={navbar ? 'navbar active' : 'navbar'}>
            <div className="max-width" style={{textAlign: 'center'}}>
                <div className="logo"><a href="#">Product<span>Page.</span></a></div>
                
                <ul className="menu"> 
                    <li><Link to='/'><h4>Home</h4></Link></li>
                    <li><Link to='/AllProductsPage'><h4>Product</h4></Link></li>
                </ul>
                <div className="menu-btn">
                    <span id={menuIcon ? 'menuIconactive' : 'menuIcon'} class="material-icons" onClick={() => setToggle(!toggle)}>menu</span>
                </div>
            </div>
        </nav>

     

  </header>

  
  </div>
  
  );
};

export default Header;

{/* <Link to='/'><h4 style={{ color: '#fff',fontSize:' 23px'}}>Home</h4></Link>
<Link  style={{ color: '#fff',fontSize:' 23px'}}to='/AllProductsPage'><h4>Product</h4></Link> */}