import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             pwd:'',
             sex:'male',
             submited:false
        }

        // refs for input auto focus (access ref)
        this.inputRef = React.createRef();
    }

    // hooks ======  Hooks that enables auto focus on input
    // this is same as jQuery onReady()
    componentDidMount(){
        console.log(this.inputRef);
        // this.inputRef.current.focus() 
    } 

    // set state onChange
    handleFormChange = (event)=>{
        this.setState({
            username:event.target.value,
        }) 
    }

    sexHandler = (event)=>{
        this.setState({
            sex: event.target.value
        })
    }
    pwdHandler = (event)=>{
        this.setState({
            pwd:event.target.value
        })
    }

    submitForm =(event)=>{
        event.preventDefault();
        this.setState({
            submited:true
        })
    }
    action = ()=>{
        if (this.state.submited === true) {
            // return <h1>Submited</h1> 
            return <div>
                <h1>You submited</h1>
                {this.state.username} <br/>
                {this.state.sex} <br/>
                {this.state.pwd}
            </div> 
        }
    }
    formHolderDiv = {
        color:"orange",
        backgroundColor:"green",
        padding:"10px"
    }

    inputStyle = {
        width:"90px",

    }
    formStyle ={
        width:"95%", 
        marginLeft:'2.5%',
        padding:"15px",
        textAlign:"left",
        color:"white"
    }
    
    render() {
        return (
            <div style={this.formHolderDiv}>
                <form style={this.formStyle} onSubmit={this.submitForm}>  
                    <label> Usernames </label><br/>
                    <input ref={this.inputRef} style={this.inputStyle} onChange ={this.handleFormChange} value = {this.state.username} />
                    <div>
                        <label>Sex</label> <br/>
                        <select style={this.inputStyle} value={this.state.sex} onChange={this.sexHandler}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label>Password</label><br/>
                        <input style={this.inputStyle} onChange={this.pwdHandler} type="password" value= {this.state.pwd} />
                    </div>
                    <div>
                        <input style={this.inputStyle} type="submit" value="Register" />
                    </div>
                </form> 

                <div>
                    {this.action()}
                </div> 

            </div>
        )
    }
}

export default Forms
