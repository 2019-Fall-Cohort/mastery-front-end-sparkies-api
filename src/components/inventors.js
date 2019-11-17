import React, { Component } from 'react'
import Experiments from './experiments'

class Inventors extends Component {

    state = {
        renderedExperiments: false
       }

Inventors = ({ inventors }) => {

    return(
        <div className = 'inventor-cards'>
            {inventors.map((inventor) => 
                <div className="inventor-card">
                    <h2 className="inventor-name">{inventor.name}</h2>
                    <h3 className="hometown">{inventor.country}</h3>
                    {this.state.renderedExperiments ?
                    <Experiments experiments={this.state.experiments}/> : null
                    }
                    <button className="experiments-button" onClick={() => {
                        this.setState({renderedExperiments:true});
                    }} 
                    >Experiments</button>
                </div>
            )}
       </div>
    )

}

state = {
    experiments: []
};


componentDidMount() {
    fetch("http://localhost:8080/experiments")
    .then(res => res.json())
    .then((data) => {
      this.setState({ experiments: data })
  })
  .catch(console.log)
  };

}

  export default Inventors