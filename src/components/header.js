import React from 'react'

// function Header(){
//     return <hi>The header</hi>
// }
let Header = (props) => {
    return  (
        <div>
            <h1>{props.userId}, Welcome to  {props.title} </h1>
            {props.children}
        </div>
    )
 }  
export default Header 