import React, { Component } from 'react'

class counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increament() {
        this.setState({
            count:this.state.count + 1
        }, ()=>{
            console.log(this.state.count);
        })
    }
    render() {
        return (
            <div>
               <h1> Counter {this.state.count}</h1>
                <button onClick={()=>{
                    this.increament()
                }} > Add </button>
            </div>
        )
    }
}

export default counter
