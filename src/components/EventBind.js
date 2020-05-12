import React, {Component} from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state={
            message: 'Am I a hootie?'
        }
    }
    
    EventHandler() {
        this.setState({
            message: 'No, you are a tootie'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.EventHandler}>Click me</button>
            </div>
        )
    }
}

export default EventBind