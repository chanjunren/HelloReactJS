import React, {Component} from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state={
            isLoggedIn: true
        }
    }
    render() {
        return (<div>
            Welcome {this.state.isLoggedIn ? 'CJR' : 'Guest'}
        </div>)
    }
}

export default UserGreeting