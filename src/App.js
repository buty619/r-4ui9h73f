import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      texto : ""
    }
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input id="inputText" type="text" onChange = {this.upDate.bind(this)} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.texto}</p>
      </div>
    );
  }
  upDate(event){
    this.setState({
      texto : event.target.value
    });
  }
}

export default App;
