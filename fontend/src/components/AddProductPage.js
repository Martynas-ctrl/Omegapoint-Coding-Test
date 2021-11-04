// import React, { Component } from 'react'
// import axios from 'axios';

// export class AddProductPage extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//         category: '',
//         description: '',
//         id: '',
//         image: '',
//         price: '',
//         rating: { count: '', rate: ''},
//         title: '',
//         hasError: false
//        }
//      }
    
//    postProduct = () => {

//        let productData = {
//           category: this.state.category,
//           description: this.state.description,
//           id: this.state.id,
//           image: this.state.image,
//           price: this.state.price,
//           rating: { count: '', rate: ''},
//           title: this.state.title,

//         }
       
//        axios.post('http://192.168.1.106:105/add_product', productData)
//           .then((response) => {
//            console.log(response);
//         //    window.location = '/';
//           })
//           .catch((error) => {
//            this.setState({
//                hasError: true
//            })
//        })  
//         .catch((error) => {
//             alert('Error! Something went wrong! Look if items you want to post are not empty! Try to refresh page!');
//         })
//     }
  
//     onChangeCategory = (e) => {
//         this.setState({
//          category: e.target.value
//         });
//     }

//     onChangeDescription = (e) => {
//         this.setState({
//             description: e.target.value
//         });
//     }

//     onChangeId = (e) => {
//         this.setState({
//             id: e.target.value
//         });
//     }

//     onChangeImage = (e) => {
//         this.setState({
//             image: e.target.value
//         });
//     }

//     onChangePrice = (e) => {
//         this.setState({
//          price: e.target.value
//         });
//     }

//     onChangeRating = (e) => {
//         this.setState({
//             rating: e.target.value
//         });  
//     }

//    onChangeTitle = (e) => {
//        this.setState({
//            title: e.target.value
//        });  
//    }

//    onSubmit = (e) => {
//        e.preventDefault();
//     //    if(!this.state.title || !this.state.category || !this.state.price || !this.state.description) {
//     //        alert(' You cannot leave anything empty ');
//     //    }

//     if(!this.state.category || !this.state.description || !this.state.id || !this.state.image || !this.state.price || !this.state.rating || !this.state.title) {
//         alert(' You cannot leave anything empty ');
//     }
// }
   
//     render() {
//        if(this.state.hasError === true) {
//            return <p className='catchP'>Error! Something went wrong! Look if items you want to post are not empty! Try to refresh the page!</p>
//        }
//         return (
//             <div>
//               <title>Add Page</title>
//                <form className ='addpageform' onSubmit={this.onSubmit}>
//                   <input className='inputFocus' type='text' placeholder='category' value={this.state.category} onChange={this.onChangeCategory}  minLength={1} maxLength={40} />
//                   <input className='inputFocus' type='textarea' placeholder='description' value={this.state.description} onChange={this.onChangeDescription}  minLength={1} maxLength={40} />
//                   <input className='inputFocus' type='number' placeholder='id' value={this.state.id} onChange={this.onChangeId} min={0.0} step={0} max={5.0} />
//                   <input className='inputFocus' type='text' placeholder='image' value={this.state.image} onChange={this.onChangeImage} minLength={1} maxLength={40}/>
//                   <input className='inputFocus' type='number' placeholder='price' value={this.state.price} onChange={this.onChangePrice} min={0.0} step={0} max={5.0} />
//                   <input className='inputFocus' type='number' placeholder='rating' value={this.state.rating} onChange={this.onChangeRating} min={0.0} step={0} max={5.0} />
//                   <input className='inputFocus' type='text' placeholder='title' value={this.state.title} onChange={this.onChangeTitle}  minLength={1} maxLength={40} />
//                   <button className='updateButton' type='submit' onClick={this.postProduct}>Add new movie</button>
//                </form>
//             </div>
//         )
//     }
// }

// export default AddProductPage