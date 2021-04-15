import React, { Component } from 'react'
import updatedComponent from './WithCounter'
class ButtonCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             quantity:1
        }
    }
    incCount = ()=>{
        this.setState(prevState=>{
            let qty = prevState.quantity;
            let price =this.state.price
            return (
                {
                    quantity:qty + 1
                } 
            )
        }) 
    }
    descCount = ()=>{
       if (this.state.quantity === 1) {}else{
            this.setState(prevState=>{
                let qty = prevState.quantity;
                let price =prevState.price
                return (
                    {quantity:qty - 1} 
                )
            })
       }
    } 
    span = {
        padding:"3px",
        fontSize:"20px",
        margin:'10px'
    }
    render() {
        return (
            <div> 
                <button onClick={this.incCount} >+{this.props.name}</button> 
                <span style={this.span} >{this.state.quantity}</span>
                <button onClick={this.descCount} >- {this.props.name} </button> 
            </div>
        )
    }
}

export default updatedComponent(ButtonCounter) 