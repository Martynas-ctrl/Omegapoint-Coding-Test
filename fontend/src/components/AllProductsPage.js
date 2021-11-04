import { React, useState, useEffect } from 'react'
import './css/Allproducts.css';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import { Link } from 'react-router-dom'
import axios from 'axios';
import ProductPage from './ProductPage';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import './css/Header.css';

// class AllProductsPage extends Component  {
//   constructor(props) {
//     super(props);
//     this.state = {
//       AllProducts: [],
//       hasError: false
//     }
//   }


let test = {
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
  
  const getAllProducts = () => {

    axios.get('http://192.168.1.106:105/all_products/')
    .then((response) => {
      console.log(response.data);
      const getProducts = response.data;
      setAllProducts(getProducts);
        // for(const test of this.state.AllProducts){
        //   let hej = test;
        //   console.log(hej)
        // }
        
     }); 
    //  .catch(error => console.error(`error: `)
    // })    
    //  .catch((error) => {
    //   this.setState({
    //       hasError: true
    //   })
    // })    all

  //   allProducts.map(product=> (                 
  //    console.log(product)
  //   ))
  // }

    }

   
    useEffect(() => {
      getAllProducts();
      console.log(allProducts);

      console.log(allProducts)
   }, []);


//      const removeProduct = () => {
      
//     const newData = {
//       getProducts: data.products.filter((product) => product.id !== props.product.id)
//     }
    

// }
// const test = () => {
//   const { id } = useParams()
//   console.log(id) 
//   axios.get('http://192.168.1.106:105//get_product_by_id/?id=/' + id)
//   .then((response) => {
//     // console.log(response.data);
//     let getProduct = product;
//     getProduct.push(response.data)
//     setProduct(product);
//    }); 
// }
      return (
        <div className="main_content_container">
          <div className="row">
            {/* {allProducts.map(product => <ProductPage key={product.id} product={product} />)} */}
            <section className="framework" id="framework">
                <div className="max-width">
                    <h2 className="title"></h2>
                    <OwlCarousel className="owl-theme"  margin={10} {...test} items={3} autoplay >
                            {allProducts.map(product=> (
                                   <div className="port-content" >
                                <div className="card" onClick={test}>
                                    <div key={product.id} className="box">
                                        <img  key={product.image} src={product.image}  alt=""  style={{height: '300px', display: 'block',  marginLeft: 'auto',  marginRight: 'auto', width: '100%' }}/>
                                        <p  key={product.category} className="product_name">{product.category}</p>
                                        <p  key={product.description} className="product_name">{product.description}</p>
                                        <p  key={product.price} className="product_description">{product.price}</p>
                                        <p className="product_description">{product.rating.rate}</p>
                                        <p className="product_description">{product.rating.count}</p>
                                        {/* <p className="product_description">{props.rating.count}</p>
                                        <p className="product_description">{props.rating.rate}</p> */}
                                        <p  key={product.title} className="product_description">{product.title}</p>
                                        {/* <Button id="btn" onClick={() => removeProduct(props.product.id)}><i id="trashCan" className="fa fa-trash"></i>Delete</Button> */}
                                       
                                    </div>
                                </div>
                                </div>
                            ) )}
                    </OwlCarousel>
                </div>
            </section>
          </div>
      </div>
  )
}
  
    
  export default AllProductsPage;



          // <div className="App">
          //   <header className="App-header">
          //   <tbody>
          //           { this.props.AllProducts.map(product => 
          //           <div>
          //             <h6>{product.category}</h6>
          //             <h6>{product.description}</h6>
          //             <h6>{product.image}</h6>
          //             <h6>{product.price}</h6>
          //             <h6>{product.rating.count}</h6>
          //             <h6>{product.rating.rate}</h6>
          //             <h6>{product.title}</h6>
          //           </div>
                   
          //           )}
          //           </tbody>
          //   </header>
          // </div>

//   import React, {Component} from 'react';
// import './css/Allproducts.css';
// import { BrowserRouter as Router, Route  } from 'react-router-dom';
// import { Link } from 'react-router-dom'
// import axios from 'axios';


// // class AllProductsPage extends Component  {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       AllProducts: [],
// //       hasError: false
// //     }
// //   }
// function AllProductsPage () {

//   const [allProducts, setAllProducts] = useState([]);
  
//     const getProducts = () => {

//     axios.get('http://192.168.1.106:105/all_products/')
//     .then((response) => {
//       console.log(response);
//         this.setState( {AllProducts: response.data})
//         for(const test of this.state.AllProducts){
//           let hej = test;
//           console.log(hej)
//         }
//      })  
//      .catch((error) => {
//       this.setState({
//           hasError: true
//       })
//     })    
//     console.log(this.state.AllProducts);
//   }

//   componentDidMount() {
//     this.getProducts();
//  }

//     render() {
//       return (
//         <div className="main_content_container">
//           <div className="row">
//             {this.state.allProducts.map(product => <Product key={product.id} product={product} />)}
//           </div>
//       </div>


//           // <div className="App">
//           //   <header className="App-header">
//           //   <tbody>
//           //           { this.props.AllProducts.map(product => 
//           //           <div>
//           //             <h6>{product.category}</h6>
//           //             <h6>{product.description}</h6>
//           //             <h6>{product.image}</h6>
//           //             <h6>{product.price}</h6>
//           //             <h6>{product.rating.count}</h6>
//           //             <h6>{product.rating.rate}</h6>
//           //             <h6>{product.title}</h6>
//           //           </div>
                   
//           //           )}
//           //           </tbody>
//           //   </header>
//           // </div>
//       );
//     }
//   }
    
//   export default AllProductsPage;
















  












  