import { React, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './css/AddProduct.css';
import axios from 'axios';
import { useParams } from "react-router-dom";

function DetailsPage() { 

    const [product, setProduct] = useState([]);
    
    const { id } = useParams()
    console.log(id);

const getProduct = () => {

   
    axios.get('http://192.168.1.106:105//get_product_by_id/?id=' + id)
    .then((response) => {
      console.log(response.data);
      let getProduct = product;
      getProduct.push(response.data)
      setProduct(product);
    
    //   const getProduct = response.data;
    //   setAllProducts(getProducts);
        // for(const test of this.state.AllProducts){
        //   let hej = test;
        //   console.log(hej)
        // }
        
     }); 
}

useEffect(() => {
    getProduct();
 });

      return (
          <div> 
            
          </div>          
      )
  }


export default DetailsPage;