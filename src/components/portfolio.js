import React, { useState, useEffect } from 'react';
import axios from 'axios';
import user from '../../backend/models/user';

const Portfolio = () => {
    const [users,setUsers] = useState({
        id: '',
        name: '',
        date: '',
        age: null
    })
    useEffect(() => {
        // making GET request to receive data
        axios.get('/users')
        .then((users) => {
            console.log(users.data)
            setUsers({
                id:users.data._id,
                name:users.data.name,
                date:users.data.date,
                age:users.data.age
            })
        })
        .catch((e) => console.log(e))
        // making POST request to send data
        axios.post('/newUser', {
            name:'Anderson',
            age:35
        })
        .then((res) => {
            console.log('Data sent!', res)
        }).catch(e => console.log(e))
    }, [])

        return (
            <div>
                <h1>Portfolio Page</h1>
                <div className="card">
                    <div className="card-body">
                    <h3>{users.name}</h3>
                    <p>{users.age}</p>
                    <small>{users.date}</small>
                    </div>
                </div>
            </div>
        )
}

export default Portfolio;

