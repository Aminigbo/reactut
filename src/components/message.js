import React, { Component } from "react";

class Message extends Component {
    constructor(){
        super()
        this.state = {
            user:"Aminigbo Paul",
            code:"JLDKED53T4",
            status:"off",
            message:"Action required, click the button"
        }
    } 
    

    loggedIn = () =>{
        this.setState({
            status:"on",
            message:"Welcome on-board"
        })
    }

    loggedOut = ()=>{
        this.setState({
            status:'off',
            message:'Logged out'
        })
    }
    // clickHandler(state){
    //     if (this.state.status === 'off') {
    //         this.loggedIn(); 
    //     }else{
    //         this.loggedOut(); 
    //     }
    // }
    clickHandler = ()=>{
        if (this.state.status === 'off') {
            this.loggedIn(); 
        }else{
            this.loggedOut(); 
        }
    }

    render(){
        return(
            <div>
                <h1>Hello {this.state.user} , {this.state.status} </h1>
                <p> {this.state.action} </p> 
                {/* <button onClick={this.clickHandler.bind(this)} >
                    Subscribes
                </button> */}
                <button onClick={this.clickHandler} >
                    Subscribes
                </button>
            </div>
        )
    }

}

export default Message