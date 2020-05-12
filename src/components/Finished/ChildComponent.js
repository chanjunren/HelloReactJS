import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('tootie :3')}>Greet parent</button>
        </div>
    )
}

export default ChildComponent