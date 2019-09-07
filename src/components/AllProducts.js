import React, { Component } from 'react';

import { connect } from 'react-redux';

import Product from './Product';

import EditComponent from './EditComponent';

import PostProduct from './PostProduct';

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}

class AllProduct extends Component {
  render() {
    return (
      <div className="container box" col="md-12">
        <div className="row inbox">

          <div className="col-md-10">
            <h1>All Products</h1>
          </div>

          <div className="col-md-2" style={{ marginTop: 10 + 'px' }}>
            <PostProduct />
          </div>

          <table class="table">
            <thead class="thead-dark">
              <tr >
                <th scope="col" id="left">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            </table>
        
            </div>
        {this.props.posts.map((post) => (
          <div key={post.id}>
            {post.editing ? <EditComponent post={post} key={post.id} /> :
              <Product key={post.id} post={post} />}
          </div>
        ))}

        





      </div>
    );
  }
}


export default connect(mapStateToProps)(AllProduct);