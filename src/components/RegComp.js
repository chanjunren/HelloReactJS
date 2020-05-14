import React, {Component} from 'react'

class RegComp extends Component {
    render() {
        console.log('Reg render')
        return (
            <div>
                Reg component {this.props.name}
            </div>
        )
    }
}

export default RegComp