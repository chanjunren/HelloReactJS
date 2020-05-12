import React from 'react'

// function Greet() {
//     return <h1>Hello Tootie :)</h1>
// }

// Functional Component
const Greet = (props) => {
    const {name, wifeName, children} = props
    return <div>
        <h1>Hello {name}, the husbie of {wifeName} :)</h1>
        {children}    
    </div> 
    }

export default Greet