import React, { Component } from 'react';

class Search extends Component {
  state = {
    query: '',
    results: []
  }


//   handleInputChange = (e) => {

//     const name = this.search.value;

//     this.setState({
//      )
//   }
//   };

  render() {
    return (
        <div>
      <form>
        <input
          placeholder="Search for..."
          ref={(input) => this.search = input}
          onChange={this.handleInputChange}
        />
        {/* <Suggestions results={this.state.results} /> */}
      </form>
      <div>
          <p>{this.state.results}</p>
      </div>
      </div>
    )
  }
}

export default Search;