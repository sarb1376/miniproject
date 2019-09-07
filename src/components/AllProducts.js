import React, { Component } from 'react';

import { connect } from 'cato-react-store';

import Product from './Product';

import EditComponent from './EditComponent';

import PostProduct from './PostProduct';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Label, FormGroup } from 'reactstrap';
import mapping from '../mapping';


// const mapStateToProps = (state) => {
//   return {
//     posts: state
//   }
// }

class AllProduct extends Component {
  render() {

    const { showAddModal, data: products } = this.props;

    return (
      <div className="container box" col="md-12">
        <div className="row inbox">

          <div className="col-md-10">
            <h1>All Products</h1>
            <Button color="success" onClick={() => showAddModal()}><span className="fa fa-pencil fa-lg"></span> Add Product</Button>
          </div>

          <div className="col-md-2" style={{ marginTop: 10 + 'px' }}>
            <PostProduct />
          </div>

          <table className="table">
            <thead className="thead-dark">
              <tr >
                <th scope="col" id="left">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>

            <tbody>

              {products && products.map((post) => (
                post.editing
                  ? <EditComponent post={post} key={post.id} />
                  : <Product key={post.id} post={post} />
              ))}
            </tbody>

          </table>
        </div>

      </div>
    );
  }
}


export default connect(mapping)(AllProduct);