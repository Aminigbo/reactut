import React from 'react'

export default function Person({user}) {
    return (
        <div>
            <h1>My name is {user.name} , i'm {user.age} years old </h1>
        </div>
    )
}
