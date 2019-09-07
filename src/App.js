import React, { Component } from 'react';
import Main from './components/Main';
import { createStore } from 'redux';
// import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';
import postReducer from './redux/postReducer';



class App extends Component {
  render() {
    const store = createStore(postReducer);
      return (
        <Provider store={store}>
      <div className="App">
        <Main />
      </div>
      </Provider>
      );
  }
  }
export default App;