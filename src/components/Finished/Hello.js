import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>The real hello tootie</h1>
    //     </div>
    // )
    return React.createElement(
        'div', 
        {id: 'hello', className: 'yo mama', }, 
        <h1>The real real hello tootie</h1>)
}

export default Hello