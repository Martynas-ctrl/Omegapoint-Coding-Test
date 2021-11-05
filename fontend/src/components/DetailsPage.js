import { React, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './css/AddProduct.css';
import axios from 'axios';
import { useParams } from "react-router-dom";

function DetailsPage() { 

    const [product, setProduct] = useState([]);
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');


    const [title, setTitle] = useState('');
    
    const { id } = useParams()
    console.log(id);

const getProduct = () => {

   
    axios.get('http://192.168.1.106:5000//get_product_by_id/?id=' + id)
    .then((response) => {
      console.log(response.data);
      let getProduct = product;
      getProduct.push(response.data)
      setProduct(getProduct);
      console.log(product);

    //   setCategory(response.data.category);
    //   setImage(response.data.image);
    //   setDescription(response.data.description);
    //   setPrice(response.data.price)
    //   setRating(response.data.rating.count)
    //   setRating(response.data.rating.rate)


//      const removeProduct = () => {
      
//     const newData = {
//       getProducts: data.products.filter((product) => product.id !== props.product.id)
//     }
    

// }


      setTitle(response.data.title);
     })
    

}

useEffect(() => {
    getProduct();
 });

      return (
          <div> 
           {product.map(info => (
                        <div className="port-content" >
                    <div className="card">
                        <div key={info.id} className="box">
                            <img  key={info.image} src={info.image}  alt=""  style={{height: '300px', display: 'block',  marginLeft: 'auto',  marginRight: 'auto', width: '100%' }}/>
                            <p key={info.category} className="product_name">{info.category}</p>
                            <p key={info.description} className="product_name">{info.description}</p>
                            <p key={info.price} className="product_description">{info.price}</p>
                            <p key={info.rating.count} className="product_description">{info.rating.count}</p>
                            <p key={info.rating.rate} className="product_description">{info.rating.rate}</p>
                            <p key={info.rating.count} className="product_description">{info.rating.count}</p>
                            <p  key={info.title} className="product_description">{info.title}</p>
                            {/* <Link to={'/DetailsPage/' + info.id} ><p className='editButtonDetailpage'>Edit Movie </p> </Link> */}
                        </div>
                    </div>
                    </div>
                ) )}
          </div>          
      )
  }


export default DetailsPage;