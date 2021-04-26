import React, { useState, useEffect } from 'react';
import myFirebase from '../config/firebase';
import userLogo from '../images/user-logo.png';
const Messages = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        // alert('Message component is rendered!')
        myFirebase.database().ref(`contacts`)
        .on('value',(contacts) => {
            let msgs = []
            contacts.forEach((contact) => {
                // console.log(`Each Contact -- ${contact.val().name}`)
                msgs.push({
                    name:contact.val().name,
                    email:contact.val().email,
                    message:contact.val().message
                })
            })
            setMessages(msgs)
        })
    }, [])
        return (
            <div className="container">
                <h1>Messages</h1>
                {
                    messages.map((message) =>  {
                    return (
                        <div className="media">
                            <img src={userLogo} className="mr-3" style={{ 
                                width:64,
                                height:64
                            }} />
                            <div className="media-body">
                                <h3 className="mt-0">{message.name}</h3>
                                <h5 className="mt-0">{message.email}</h5>
                                <p>{message.message}</p>
                            </div>
                        </div>
                    )
                    })
                }
            </div>
        )
}

export default Messages;
