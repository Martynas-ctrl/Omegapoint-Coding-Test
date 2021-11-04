// import React, {Component} from 'react';
// import './css/Product.css';
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import './css/Header.css';

// const test = {
//   responsive:{
//       0:{
//           items:1,
          
//       },
//       600:{
//           items:2,

         
//       },
//       1000:{
//           items:3,
//       }
//   }
 
// }

// function ProductPage(props) {
   
//       return (
//             <div>
//               <section className="framework" id="framework">
//     <div className="max-width">
//         <h2 className="title">Ramverk och verktyg</h2>
//         <div className="port-content">
//             <OwlCarousel className="owl-theme" loop margin={10} {...test} items={20} autoplay >
//                 <div>
//                     <div>
//                         <div className="card">
//                             <div className="box">
//                                 <img src={props.product.image}  alt=""  style={{height: '140px', display: 'block',  marginLeft: 'auto',  marginRight: 'auto', width: '43.5%' }}/>
//                                 <p className="product_name">{props.product.category}</p>
//                                 <p className="product_name">{props.product.description}</p>
//                                 <p className="product_description">{props.product.price}</p>
//                                 <p className="product_description">{props.rating}</p>
//                                 {/* <p className="product_description">{props.rating.count}</p>
//                                 <p className="product_description">{props.rating.rate}</p> */}
//                                 <p className="product_description">{props.product.title}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </OwlCarousel>
//         </div>
//     </div>
// </section>
//             </div>



     
//       );
//     }
    
//   export default ProductPage;



// // import React, {Component} from 'react';

// // class ProductPage extends Component  {
// //     constructor(props) {
// //       super(props);
// //       this.state = {
        
// //       }
// //     }
// //     render() {
// //       return (
// //            <div className="col-sm-4">
// //         <div className="product_card" >
// //           <img src={props.product.image.url} className="card-img-top"/>
// //           <div className="product_card_body">
// //             <h5 className="product_name">{props.product.name}</h5>
// //             <p className="product_price">$ {props.product.price}</p>
// //             <p className="product_description">{props.product.description}</p>
// //             {/* <div className="product_buttons">
// //               <EditButton id={props.product.id} />
// //               <Button id="btn" onClick={() => removeProduct(props.product.id)}><i id="trashCan" className="fa fa-trash"></i>Delete</Button>
// //             </div> */}
// //           </div>
// //         </div>
// //       </div>
// //       );
// //     }
// //   }
    
// //   export default ProductPage;