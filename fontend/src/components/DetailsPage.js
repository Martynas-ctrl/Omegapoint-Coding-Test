import { React, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import './css/detailsPage.css'

function DetailsPage() { 

    const [product, setProduct] = useState([]);
    const [title, setTitle] = useState('');
    const [errorMsg, setErrorMsg] = useState(false);

    const { id } = useParams()

    const getProduct = () => {

        axios.get('http://192.168.1.106:5000//get_product_by_id/?id=' + id)
            .then((response) => {
                let getProduct = product;
                getProduct.push(response.data)
                setProduct(getProduct);
                setTitle(response.data.title);
            })
            .catch((error) => {
                console.log(error)   ;   
                setErrorMsg(true);
           })
    }

    useEffect(() => {
        getProduct();
    });

    if(errorMsg === true) {
        return (
            <div> 
              <section className="detailsPage" id="framework" style={{paddingTop: '200px'}}>
                   <div className="max-width">
                      <h1 style={{font: '100px'}} className="title"></h1>
                      <div className="port-content">
      
                        <div style={{maxWidth:' 1200px', textAlign: 'center'}} id="container">	
    
                            <div style={{textAlign: 'center'}} className="product-detailsHomePage">
                                
                                <h1>404 ERROR!</h1>
    
                                <p className="information">Page not Found!</p>
                                <p className="information">Something went wrong! Look if the product you want to see still exist! Try to go back or refresh the page!</p>

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
                <section className="detailsPage" id="framework" style={{paddingTop: '200px'}}>
                    <div className="max-width">
                        <h1 style={{font: '100px'}} className="title"></h1>
                        <div className="port-content">
                            {product.map(info=> (

                                <div id="container">	

                                    <div className="product-details">
                                        <h3 key={info.title} >{info.title}</h3>
                                        <h5 key={info.category} >{info.category}</h5>
                                        <h5 key={info.rating.rate} >{info.rating.rate} / 5</h5>
                                        <h5 key={info.rating.count} >{info.rating.count}</h5>
                                        <p className="information" key={info.description}>{info.description}</p>
                                        <button id='btnbtn'>${info.price} Buy</button> 
                                    </div>
                                    
                                    <div class="product-image">
                                        <img key={info.image} src={info.image}  alt=""  style={{height: '300px', width: '200px', marginLeft: '30%',  marginTop: '100px' }}/>
                                    </div>

                                </div>
                              ))}
                        </div>
                    </div>
                </section>
            </div>          
        )
  }


export default DetailsPage;