import React from 'react'
import Navbar from './Navbar'
import Section1 from './Section1'
import Section2 from './Section2'
import Footer from './Footer'

const Wrap = () => {
    let components = [<Navbar/>,<Section1/>,<Section2/>,<Footer/>]
    let renderComp = components.map((comps) => {
        return (comps)
    })
    return (
        <div>{renderComp}</div>
    )
}

export default Wrap