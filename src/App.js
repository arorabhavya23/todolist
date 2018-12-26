import React, { Component } from 'react';
import './App.css';
import MyHeader from "./Components/MyHeader"
import MyMainBody from "./Components/MyMainBody"
import MyFooter from "./Components/MyFooter"

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyHeader />
        <MyMainBody />
        <MyFooter />
      </div>
    );
  }
}

export default App;
