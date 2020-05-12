import React, {Component} from 'react'

class ClassClick extends Component {
    clickHandler() {
        console.log('Classy clicked!')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Classy Click me!</button>
            </div>
        )
    }
}

export default ClassClick