import React, {Component} from 'react'
import santa from './resources/hehehe.jpg'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            showSanta: false,
            message: 'Hihihi visitor',
            buttonMessage:'Click to see santa >:D'
        }
    }
    
    revealChioSanta() {
        this.setState((prevState) => ({
            showSanta: !prevState.showSanta,
            message: prevState.showSanta ? 'Hihihi visitor' : '(づ￣ ³￣)づ',
            buttonMessage: prevState.showSanta ? 'Click to see santa >:D': ':DDD'
        }));
        console.log(this.state)
    }

    render() {
        console.log("Show santa: " + this.showSanta)
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.revealChioSanta()}> {this.state.buttonMessage} </button>
                {this.state.showSanta && <img src={santa}/>}
            </div>
        ) 
    }
}

export default Message