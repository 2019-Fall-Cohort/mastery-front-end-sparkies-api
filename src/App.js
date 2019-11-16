import React, { Component } from 'react';
import './App.css';
import Render from './components/inventors'
import Inventors from './components/inventors'

class App extends Component{

  render() {
  return (
    <div className="App">
      <header className="header">
        <h1>Sparkies</h1>
        <button className="inventors-button" onClick={this.renderInventors}>Get Inventors!</button>
     </header>
     
     <Render render={this.state.render}/>
      {/* <Inventors inventors={this.state.inventors}/> */}
   </div>
  )}
  
  state = {
    inventors: []
};

componentDidMount() {
  fetch("http://localhost:8080/inventors")
  .then(res => res.json())
  .then((data) => {
    this.setState({inventors: data })
  })
  .catch(console.log)
};
}




export default App;

