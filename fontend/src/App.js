import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import { Link } from 'react-router-dom'
import axios from 'axios';

import HomePage from './components/HomePage';
import AllProductsPage from './components/AllProductsPage';
import ProductPage from './components/ProductPage';
import DetailsPage from './components/DetailsPage';
import Header from './components/Header'


class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      AllProducts: [],
      hasError: false
    }
  }
 
//   getProducts = () => {
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


//   postProduct = () => {
   
//     let test = {
//       id : 22,
//       title : 'Harry Potter', 
//       category : 'Fantasy', 
//       description : 'Bra Film',
//       image : 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
//       rating : { 'count' : 555, 'rate' : 1.2 },
//       price : 150
//     }
    
//     axios.post('http://192.168.1.106:105/add_product/', test)
//        .then((response) => {
//         console.log(response);
//         console.log('hej');
//         // window.location = '/';
//        })
//        .catch((error) => {
//         this.setState({
//             hasError: true
//         })
//     })  
//         .catch((error) => {
//             alert('Error! Something went wrong! Look if items you want to post are not empty! Try to refresh page!');
//      })
//  }

 

//   componentDidMount() {
//     this.getProducts();
//  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className='container'>
                {/* <h1>Start Page</h1>
                <Link to='/'><h4>Home</h4></Link>
                <Link to='/AllProductsPage'><h4>Product</h4></Link>
                <button className='updateButton' type='submit' onClick={this.postProduct}>Add new product</button> */}
                <Header />
            </div>
          </header>
          <main>
             <Route path='/' exact render={ () =>  <HomePage/> } />
             <Route path='/AllProductsPage' render= { () => <AllProductsPage AllProducts={this.state.AllProducts}/>} />
             <Route path='/ProductPage/:id' render = { (props) => <ProductPage  id={props.match.params.id}/>  } />
             <Route path='/DetailsPage/:id' render = { (props) => <DetailsPage id={props.match.params.id} />} />
         </main>
        </div>
      </Router>
    );
  }
}
  
export default App;