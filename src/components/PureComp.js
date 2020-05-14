import React, {PureComponent} from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('Pure render')
        return (
            <div>
                Pure compie {this.props.name}
            </div>
        )
    }
}

export default PureComp