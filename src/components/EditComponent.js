import React, { Component } from 'react';
import { connect } from 'cato-react-store';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Label, FormGroup } from 'reactstrap';
import mapping from '../mapping';


class EditComponent extends Component {
  // handleEdit = (e) => {
  //   e.preventDefault();
  //   const newTitle = this.getTitle.value;
  //   const newMessage = this.getMessage.value;
  //   const data = {
  //     newTitle,
  //     newMessage
  //   }

  //   this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
  // }


  render() {

    const { post , onHideModal , modal} = this.props;

    return (
      <div>

<Modal isOpen={modal === 'add'} toggle={() => onHideModal()}>
          <ModalHeader toggle={() => onHideModal()}>Add Product</ModalHeader>
          <ModalBody>
            
                <input
                  required type="text"
                  defaultValue={post.title}
                  placeholder="Enter Post Title"
                  className="col-md-2 input"
                  style={{ float: "left" }}
                />
          
                <input required
                 required type="text"
                 defaultValue={post.price}
                 placeholder="Enter Post price"
                 className="col-md-2 input"
                 style={{ float: "left" }}
                  />
        
          </ModalBody>
          <ModalFooter>
            <Button color="primary" /*onClick={() => onSave(product)}*/ >Post</Button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}
export default connect()(EditComponent);






