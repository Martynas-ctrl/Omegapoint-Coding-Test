import { React, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

function DetailsPage() { 

    const [product, setProduct] = useState([]);
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [title, setTitle] = useState('');

    const { id } = useParams()

    const getProduct = () => {

        axios.get('http://192.168.1.106:5000//get_product_by_id/?id=' + id)
            .then((response) => {
                let getProduct = product;
                getProduct.push(response.data)
                setProduct(getProduct);
                setTitle(response.data.title);
            })
    }

    useEffect(() => {
        getProduct();
    });

      return (
          <div> 
                <section className="framework" id="framework" style={{paddingTop: '200px'}}>
                    <div className="max-width">
                        <h1 style={{font: '100px'}} className="title"></h1>
                        <div className="port-content">
                            {product.map(info=> (

                                <div id="container">	

                                    <div className="product-details">
                                        <h3 key={info.title} >{info.title}</h3>
                                        <p className="information" key={info.description}>{info.description}</p>
                                        <button id='btnbtn'>${info.price} Buy</button>
                                    </div>
                                    
                                    <div class="product-image">
                                        <img key={info.image} src={info.image}  alt=""  style={{height: '300px', width: '200px', marginLeft: '30%',  marginTop: '100px' }}/>
                                        
                                        <div class="info">
                                            <h2>Description</h2>
                                            <ul>
                                                <li><strong>Category : </strong> {info.category}</li>
                                                <li><strong>Rating rate : </strong>{info.rating.rate}</li>
                                                <li><strong>Rating count : </strong>{info.rating.count}</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            ) )}
                        </div>
                    </div>
                </section>
            </div>          
        )
  }


export default DetailsPage;