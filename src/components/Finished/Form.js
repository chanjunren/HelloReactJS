import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        
        this.state={
            userName: '',
            thots:'',
            move: 'Brush'
        }
    }

    inputHandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    thotHandler = (event) => {
        this.setState({
            thots: event.target.value
        })
    }

    moveItHandler = (event) => {
        this.setState({
            move: event.target.value
        })
    }

    submitHandler = (event) => {
        alert(`Dood's name: ${this.state.userName} wants to learn: ${this.state.move}
        His thots: ${this.state.thots}
        `)
        event.preventDefault()
    }
    

    render() {
        const {userName, move, thots} = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Username</label>
                    <input type='text' value={userName} 
                    onChange={this.inputHandler}></input>
                </div>
                <div>
                    <label>Thots?</label>
                    <textarea onChange={this.thotHandler}></textarea>
                </div>
                <div>
                    <label>Slalom move it move it</label>
                    <select value={move} onChange={this.moveItHandler}>
                        <option value='Brush'>Brush</option>
                        <option value='Butterfly'>Butterfly</option>
                        <option value='Back toe wheeling'>Back toe wheeling</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form