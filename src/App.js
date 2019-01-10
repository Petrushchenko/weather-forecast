import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';
import Display from './components/Display';
import { Provider } from "react-redux";
import store from "./store/createStore";


class App extends Component {

  render() {
   
    return (
     <Provider store={store}>
      <div className="App">
        <Form />
        <Display />
      
      </div>
     </Provider>
    );
  }
}

export default App;
 