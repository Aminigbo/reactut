import React, {Component} from 'react'

const updatedComponent = OriginalComponent =>{
    class NewComponent extends Component {
        render() {
            return (
                <div>
                    <OriginalComponent name="Paul" />
                </div>
            )
        }
    }
    return NewComponent
}

export default updatedComponent