import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button } from 'reactstrap';

class Product extends Component {
  render() {
  return (
    


      <tr>
      <td>{this.props.post.title}</td>
      <td>{this.props.post.message}</td>
      <td><Button outline  onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}> Edit </Button></td>
      <td><Button outline  color="danger" onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}> Delete </Button></td>
      </tr>
  

    
  );
 }
}

export default connect()(Product);