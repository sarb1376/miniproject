import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const Product = ({ post, onEdit, onDelete , onModalOpen , showAddModal }) => (
  <tr>
    <td>{post.title}</td>
    <td>{post.price}</td>
    <td><Button outline onClick={() => showAddModal()}> Edit </Button></td>
    <td><Button outline color="danger" onClick={() => onDelete(post)}> Delete </Button></td>
  </tr>
);

export default connect()(Product);
