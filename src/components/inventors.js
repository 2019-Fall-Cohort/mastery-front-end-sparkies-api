import React from 'react'

const Inventors = ({ inventors }) => {

    

    return(
        <div className = 'inventor-cards'>
            {inventors.map((inventor) => 
                    <div className="card">
                        <h2 className="inventor-name">{inventor.name}</h2>
                        <h3 className="hometown">{inventor.country}</h3>
                    </div>
            )}
       </div>
    )

}

  export default Inventors