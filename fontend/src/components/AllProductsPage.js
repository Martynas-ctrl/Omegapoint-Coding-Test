import { React, useState, useEffect } from 'react'
import axios from 'axios';
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../components/css/carousel.css';



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
  const [product, setProduct] = useState([]);
  const [hasError, setHasError] = useState(false);
  
  const getAllProducts = () => {

    axios.get('http://192.168.1.106:5000/all_products/')
    .then((response) => {
      const getProducts = response.data;
      setAllProducts(getProducts);
     })  
     .catch((error) => {
       setHasError(true);
      })
    }

    useEffect(() => {
      getAllProducts();
      console.log(allProducts);

      console.log(allProducts)
   }, []);

  const sendToDetailsPage = (id) => {
  
    window.location.href = '/DetailsPage/' + id;

  }
      return (
        <div>
            <section className="framework" id="framework" style={{paddingTop: '200px'}}>
                <div className="max-width">
                  <h1 style={{font: '100px'}} className="title"></h1>
                    <div className="port-content">
                        <OwlCarousel className="owl-theme" loop margin={10} {...responsiveWeb} items={20} autoplay >
                            {allProducts.map(product=> (
                              <div id="container">	
	                              <div className="product-details">
                                  <h3 key={product.title} >{product.title}</h3>
                                  <p className="information" key={product.description}>{product.description}</p>
                                  <button id='btnbtn' onClick={sendToDetailsPage.bind(this, product.id)}>${product.price} Buy</button>
                                </div>
                                
                                <div class="product-image">
                                  <img key={product.image} src={product.image}  alt=""  style={{height: '300px', width: '200px', marginLeft: '30%',  marginTop: '100px' }}/>
                              
                                  <div class="info">
                                    <h2> Description</h2>
                                      <ul>
                                        <li><strong>Category : </strong> {product.category}</li>
                                        <li><strong>Rating rate : </strong>{product.rating.rate}</li>
                                        <li><strong>Rating count : </strong>{product.rating.count}</li>
                                      </ul>
                                  </div>

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