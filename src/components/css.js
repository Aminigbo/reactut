import React from 'react'

export default function Css(props) {
    // let color = props.color ? "text":""
    let color = 1

    // inline
    let colorObject = {
        color:"white",
        backgroundColor:"maroon"
    }
    return (
        <div>
            <h1 style = {colorObject}  className ={color} >Welcome to my website</h1>
        </div>
    )
}
