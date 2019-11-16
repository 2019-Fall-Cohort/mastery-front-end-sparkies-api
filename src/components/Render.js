import React from 'react'
import Inventors from './components/inventors'


const Render = props => {
    if (!props.show) {
        return null;
    }
    return <Inventors inventors={this.state.inventors}/>
}

const RenderInventor = () => {
    const [render, setRender] = React.useState(false);


return (
    <>
    <Render show={render} />
    <button onClick={() => setRender(!render)}>Show Inventors</button>
    </>
)
}
export default Render