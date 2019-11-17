import React from 'react'
import Render from './Render'

const Experiments = ({ experiments }) => {
    
    return(
        <div className = 'experiment-cards'>
            {experiments.map((experiment) => 
                    <div className="inventor-card">
                        <h2 className="experiment-name">{experiment.name}</h2>
                        <h3 className="inventor">{experiment.inventor}</h3>
                        <h3 className="description">{experiment.description}</h3>
                        {/* <button>Experiments</button> */}
                    </div>
            )}
       </div>
    )
}

    export default Experiments
