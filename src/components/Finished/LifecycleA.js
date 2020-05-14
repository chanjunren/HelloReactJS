import React, {Component} from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'SadTootie'
        }
        console.log('A Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('A getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('A componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('A should component update')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('A getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('A componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name:'HappyTootie'
        })
    }

    render() {
        console.log('A render')
        return (
            <div>
                <div>LifecycleA</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default LifecycleA