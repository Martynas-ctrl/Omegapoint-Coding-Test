import { React, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './css/AddProduct.css';
import axios from 'axios';

function Addproducts() { 


      const [category, setCategory] = useState('');
      const [description, setDescription] = useState('');
      // const [image, setImage] = useState('');
      const [price, setPrice] = useState('');
      const [rating, setRating] = useState('');
      const [title, setTitle] = useState('');

      const [showModal, setShow] = useState(false);
      const formShow = () => setShow(true);
      const formClose = () => setShow(false);

     const postProduct = () => {
   
        let productData = {
          category: category,
          description: description,
          id: 23,
          image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          price: price,
          rating: { count: 312, rate: 1.3},
          title: title,
        }


      axios.post('http://192.168.1.106:105/add_product/', productData)
          .then((response) => {
          console.log(response);
        //    window.location = '/';
          })
          .catch((error) => {
          this.setState({
              hasError: true
          })
      })  
        .catch((error) => {
            alert('Error! Something went wrong! Look if items you want to post are not empty! Try to refresh page!');
        })
      }


      
    const onChangeCategory = (e) => {
      console.log(e.target.value)
      setCategory(e.target.value);
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    // const onChangeId = (e) => {
    //     this.setState({
    //         id: e.target.value
    //     });
    // }

    // const constonChangeImage = (e) => {
    //     this.setState({
    //         image: e.target.value
    //     });
    

    const onChangePrice = (e) => {
        setPrice(e.target.value);
    }

    const onChangeRating = (e) => {
        this.setState({
            rating: e.target.value
        });  
    }

    const onChangeTitle = (e) => {
          setTitle(e.target.value);
    }


    const onSubmit = (e) => {
        e.preventDefault();
       if(!category || !description || !price || !title) { // kanske image också
           alert(' You cannot leave anything empty ');
       }

      if(!this.state.category || !this.state.description || !this.state.id || !this.state.image || !this.state.price || !this.state.rating || !this.state.title) {
          alert(' You cannot leave anything empty ');
      }
    }


      return (
          <div> 
            <Button className="button_add" variant="primary" onClick={formShow}>+ Add New</Button>
            <Modal show={showModal} onHide={formClose}>
              <Modal.Header closeButton>
                <Modal.Title className="modal_title">ADD GAME FORM</Modal.Title>
              </Modal.Header>
              <Modal.Body className='modalContainer'>
              <form className ='addpageform' onSubmit={onSubmit}>
                      <input className='inputFocus' type='text' placeholder='category' value={category} onChange={onChangeCategory}  minLength={1} maxLength={40} />
                      <input className='inputFocus' type='textarea' placeholder='description' value={description} onChange={onChangeDescription}  minLength={1} maxLength={40} />
                      {/* <input className='inputFocus' type='number' placeholder='id' value={this.state.id} onChange={this.onChangeId} min={0.0} step={0} max={5.0} /> */}
                      {/* <input className='inputFocus' type='text' placeholder='image' value={this.state.image} onChange={this.onChangeImage} minLength={1} maxLength={40}/> */}
                      <input className='inputFocus' type='number' placeholder='price' value={price} onChange={onChangePrice} min={0.0} step={0} max={5.0} />
                      {/* <input className='inputFocus' type='number' placeholder='rating' value={this.state.rating} onChange={this.onChangeRating} min={0.0} step={0} max={5.0} /> */}
                      <input className='inputFocus' type='text' placeholder='title' value={title} onChange={onChangeTitle}  minLength={1} maxLength={40} />
                  </form>
              </Modal.Body>
              <Modal.Footer>
                <button id="cancel_button" className="btn btn-primary" onClick={formClose}>Cancel</button>
                {/* <button type="submit" className="btn btn-primary" onClick={add}>Add Game</button> */}
                <button className='updateButton' type='submit' onClick={postProduct}>Add new movie</button>
              </Modal.Footer>
            </Modal>
            <button className='updateButton' type='submit' onClick={postProduct}>Add new movie</button>
          </div>          
      )
  }


export default Addproducts;