import React, { Component } from 'react';
import { connect } from 'cato-react-store';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Label, FormGroup } from 'reactstrap';
import mapping from '../mapping';


class PostProduct extends Component {

  // constructor(props) {
  //   super(props);

  //   this.toggleModal = this.toggleModal.bind(this);

  //   this.state = {
  //     isModalOpen: false
  //   };

  // }

  // toggleModal() {
  //   this.setState({
  //     isModalOpen: !this.state.isModalOpen
  //   });
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const title = this.getTitle.value;
  //   const message = this.getMessage.value;
  //   const data = {
  //     id: new Date(),
  //     title,
  //     message,
  //     editing: false
  //   }

  //   this.props.dispatch({
  //     data
  //   });

  //   this.getTitle.value = '';
  //   this.getMessage.value = '';
  // }

  render() {

    // const title = this.getTitle.value;
    // const message = this.getMessage.value;

    const { showAddModal, onSave, onChange, onHideModal,
      product, modal,
    } = this.props;

    if( !product ) {
      return <div />;
    }

    return (
      <div> 
        <Modal isOpen={modal === 'add'} toggle={() => onHideModal()}>
          <ModalHeader toggle={() => onHideModal()}>Add Product</ModalHeader>
          <ModalBody>
            <FormGroup row>
              <Label htmlFor="firstname" md={4}>Product Title</Label>
              <Col md={8}>
                <input
                  type="text"
                  name="firstname" 
                  className="input"
                  placeholder="Enter Product Title"
                  required
                  value={product.title}
                  onChange={e => onChange('title', e.target.value)}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label htmlFor="lastname" md={4}>Product Price</Label>
              <Col md={8}>
                <input required
                  placeholder="Enter Product price" 
                  name="lastname" 
                  className="input" 
                  value={product.price}
                  onChange={e => onChange('price', e.target.value)}
                  />
              </Col>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => onSave(product)}>Post</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default connect(mapping)(PostProduct);


