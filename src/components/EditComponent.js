import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'reactstrap';


class EditComponent extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage
    }

    this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
  }


  render() {
    return (
      <div>

        <form onSubmit={this.handleEdit}>

          <input required type="text" ref={(input) => this.getTitle = input}
            defaultValue={this.props.post.title} placeholder="Enter Post Title" className="col-md-2 input" style={{float:"left"}}/>

          <input required ref={(input) => this.getMessage = input}
            defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" className="col-md-2 sarb input"/>

          <Button className="col-md-2 sarb">Update</Button>

        </form>

      </div>
    );
  }
}
export default connect()(EditComponent);