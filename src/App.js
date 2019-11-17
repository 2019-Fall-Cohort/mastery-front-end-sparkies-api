import React, { Component } from 'react';
import './App.css';
import Inventors from './components/inventors'

class App extends Component{

  state = {
   renderedInventors: false
  }
  
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Sparkies</h1>
        </header>
        {this.state.renderedInventors ? 
        <Inventors inventors={this.state.inventors}/> : null
        }
        <button className="inventors-button" onClick={() => {
          this.setState({renderedInventors:true});
        }}
        >Get Inventors!</button>

      
        
      </div>
  )}
  
  state = {
    inventors: []
};

componentDidMount() {
  fetch("http://localhost:8080/inventors")
  .then(res => res.json())
  .then((data) => {
    this.setState({ inventors: data })
  })
  .catch(console.log)
};


}




export default App;

