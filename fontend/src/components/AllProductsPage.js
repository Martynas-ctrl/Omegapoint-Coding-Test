import { React, useState, useEffect } from 'react'
import './css/Allproducts.css';

import axios from 'axios';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";



let testz = {
  responsive:{
      0:{
          items:1,
          
      },
      600:{
          items:2,

         
      },
      1000:{
          items:3,
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
      console.log(response.data);
      const getProducts = response.data;
      setAllProducts(getProducts);
     })  
     .catch((error) => {
       setHasError(true);
       console.log(error);
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
            <section className="services" style={{paddingTop: '200px'}}>
                <div className="max-width">
                    <h2 className="title"></h2>
                    <OwlCarousel className="owl-theme"  margin={10} {...testz} items={3} autoplay >
                            {allProducts.map(product=> (
                                <div className="port-content" >
                                  <div className="card" style={{minHeight: '500px' }} onClick={sendToDetailsPage.bind(this, product.id)} >
                                    <div key={product.id} className="box" >
                                        <img key={product.image} src={product.image}  alt=""  style={{height: '200px', display: 'block',  marginLeft: 'auto',  marginRight: 'auto', width: '300px' }}/>
                                        <p style={{textAlign:'center', color: '#F9A826',  fontSize: '20px',}} key={product.title} className="product_description">{product.title}</p>
                                        <p  style={{textAlign:'center', color: '#F9A826', fontSize: '15px', }} key={product.description} className="product_name">{product.description}</p>
                                        <p  style={{paddingLeft:'10px', color: '#F9A826', fontSize: '15px'}}key={product.category} className="product_name">Category: {product.category}</p>
                                        <p  style={{paddingLeft:'10px', fontSize: '20px', color: '#F9A826'}} key={product.price} className="product_description">${product.price}</p>
                                        <div style={{display: 'flex',color: '#F9A826'}}>
                                          <p style={{paddingLeft:'10px', color: '#F9A826'}} className="product_description">Rating rate: {product.rating.rate}</p>
                                          <p style={{paddingLeft:'10px', color: '#F9A826'}} className="product_description">Rating count: {product.rating.count}</p>
                                        </div>
                                        {/* <Link to={'/DetailsPage/' + product.id} ><p className='editButtonDetailpage'>Go to this product </p> </Link> */}
                                    </div>
                                </div>
                                </div>
                            ) )}
                    </OwlCarousel>
                </div>
            </section>
          </div>   
  )
}
  
    
  export default AllProductsPage;