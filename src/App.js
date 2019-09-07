import React, { Component } from 'react';
import Main from './components/Main';
import { connect } from 'cato-react-store';
import mapping from './mapping';
// import { createStore } from 'redux';
// import { ConfigureStore } from './redux/configureStore';
// import { Provider } from 'react-redux';
// import postReducer from './redux/postReducer';



class App extends Component {
  render() {
      return (

      <div className="App">
        <Main />
      </div>


      );
  }
  }
export default connect(mapping)(App);