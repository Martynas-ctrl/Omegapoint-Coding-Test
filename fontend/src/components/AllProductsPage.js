import { React, useState, useEffect } from 'react'
import axios from 'axios';
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../components/css/carousel.css';
import './css/productList.css';



const responsiveWeb = {
  responsive:{
      0:{
          items:1,
          
      },
      600:{
          items:2,

         
      },
      1000:{
          items:2,
      }
  }
 
}

function AllProductsPage () {


  const [allProducts, setAllProducts] = useState([]);
  const [hasError, setHasError] = useState(false);
  
  const getAllProducts = () => {

    axios.get('http://192.168.1.106:5000/all_products/')
    .then((response) => {
      const getProducts = response.data;
      setAllProducts(getProducts);
     })  
     .catch((error) => {
       console.log(error);
       setHasError(true);
      })
    }

    useEffect(() => {
      getAllProducts();
   }, []);

  const sendToDetailsPage = (id) => {
    window.location.href = '/DetailsPage/' + id;
  }

  const reloadPage = () => {
    window.location.reload();
  }

  if(hasError === true) {
    return (
        <div> 
          <section className="productList" style={{paddingTop: '200px'}}>
               <div className="max-width">
                  <h1 style={{font: '100px'}} className="title"></h1>
                  <div className="port-content">
  
                    <div style={{maxWidth:' 1200px', textAlign: 'center'}} id="container">	

                        <div style={{textAlign: 'center'}} className="product-detailsHomePage">
                            
                            <h1>500 ERROR!</h1>

                            <p className="information">Internal Server Error!</p>
                            <p className="information">Oops, something went wrong.</p>
                            <p className="information">The server is not responding, please try to refresh this page, try again later or feel free to contact your administrator.</p>

                            <button id='btnbtn' onClick={reloadPage}>Reload</button>
                        </div>
                        
                    </div>

                  </div>
              </div>
          </section>
        </div>          
      );
}
      return (
        <div>
            <section className="productList" id="framework" style={{paddingTop: '200px'}}>
                <div className="max-width">
                  <h1 style={{font: '100px'}} className="title"></h1>
                    <div className="port-content">
                        <OwlCarousel className="owl-theme" loop margin={10} {...responsiveWeb} items={20} autoplay >
                            {allProducts.map(product=> (
                              
                              <div id="container">	

                                <div class="product-image">
                                  <img className="imgProductList" key={product.image} src={product.image}  alt="" />
                              
                                  <div class="info">
                                    <h2>More Information</h2>
                                      <ul>
                                        <li><strong>Category : </strong> {product.category}</li>
                                        <li><strong>Rating rate : </strong>{product.rating.rate} / 5</li>
                                        <li><strong>Rating count : </strong>{product.rating.count}</li>
                                      </ul>
                                  </div>

                                </div>

	                              <div className="product-detailsProductList">
                                  <h3 id='h3ProductList'key={product.title} >{product.title}</h3>
                                  <p id="informationProductList" key={product.description}>{product.description}</p>
                                  <h3 id='h3ProductList' key={product.title} >${product.price}</h3>
                                  <button id='btnbtn' onClick={sendToDetailsPage.bind(this, product.id)}>Read More</button>
                                </div>
                                
                                
                              </div> 
                            ) )}
                        </OwlCarousel>
                     </div>
                  </div>
              </section>
          </div>   
        )
      }
  
export default AllProductsPage;