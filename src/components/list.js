import React from 'react'
import Person from './person'
import './css/person.css'
export default function List() {
    let Users = [
        {
            name:"Aminigbo",
            age:21,
            id:1,
            sex:"male"
        },
        {
            name:"Bryan",
            age:24,
            id:32,
            sex:"male"
        },
        {
            name:"Emmanuel",
            id:3,
            age:20, 
            sex:"male"
        }
    ]
    
    return (
        <div>
            {
                Users.map(user=>{
                    return <Person key= {user.id} user={user} />
                })
            }
        </div>
    )
}
