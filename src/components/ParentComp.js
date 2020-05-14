import React, {Component, PureComponent} from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'CJR'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'CJR'
            })
        }, 2000)
    }

    render() {
        console.log('--------------Parent render------------------')
        return (
            <div>
                ParentComp
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp