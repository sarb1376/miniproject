import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, Col, Label ,FormGroup} from 'reactstrap';


class PostProduct extends Component {

    constructor(props) {
        super(props);
    
        this.toggleModal = this.toggleModal.bind(this);
    
        this.state = {
          isModalOpen: false
        };
    
      }
    
      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing:false
        }
        this.props.dispatch({
            type:'ADD_POST',
            data});
          this.getTitle.value = '';
          this.getMessage.value = '';
    }

    render() {
        return (
            <div> <Button color="success" onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Add Product</Button>
<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
  <ModalHeader toggle={this.toggleModal}>Add Product</ModalHeader>
  <ModalBody>

  <form onSubmit={this.handleSubmit}>


  <FormGroup row>
    <Label htmlFor="firstname" md={4}>Product Title</Label>
    <Col md={8}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                        placeholder="Enter Product Title" id="firstname" name="firstname" className="input"/>
                        </Col>
                        </FormGroup>
                   

                        <FormGroup row>
    <Label htmlFor="lastname" md={4}>Product Price</Label>
    <Col md={8}>
                    <input required  ref={(input) => this.getMessage = input} cols="28"
                        placeholder="Enter Product price" id="lastname" name="lastname" className="input"/>
                        </Col>
                        </FormGroup>
                    


                    <Button color="primary">Post</Button>


                </form>
  </ModalBody>
</Modal>
</div>
        );
    }
}
export default connect()(PostProduct);


