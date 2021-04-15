import React, { Component } from 'react'
import Child from './child'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parent:"Parent"
        }
    }
    // function to greet
    greet = (childName)=>{
        alert(`Hello ${this.state.parent} form ${childName}`)
    }
    
    render() {
        return (
            <div>
                <Child greet={this.greet}/>
            </div>
        )
    }
}

export default Parent