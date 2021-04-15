import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick={()=>props.greet('Child')}>Greet parents</button>
            <span></span>
        </div>
    )
}

export default Child
