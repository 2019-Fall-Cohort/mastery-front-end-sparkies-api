import React, { Component } from 'react';
import './App.css';
import Inventors from './components/inventors'
import Experiments from './components/experiments'

class App extends Component{

  state = {
   renderedInventors: false
  }

  state = {
    renderedExperiments: false
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
        {this.state.renderedExperiments ? 
        <Experiments experiments={this.state.experiments}/> : null
        }
        <button className="experiments-button" onClick={() => {
          this.setState({renderedExperiments:true});
        }}
        >Get Experiments!</button>

      
        
      </div>
  )}
  
  state = {
    inventors: []
  };
  state = {
    experiments: []
  };

componentDidMount() {
  fetch("http://localhost:8080/inventors")
  .then(res => res.json())
  .then((data) => {
    this.setState({ inventors: data })
  })
  fetch("http://localhost:8080/experiments")
  .then(res => res.json())
  .then((data) => {
    this.setState({ experiments: data })
  })
  .catch(console.log)
};

}

export default App;

