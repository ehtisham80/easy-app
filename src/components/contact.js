import React, { useState } from 'react';
import myFirebase from '../config/firebase';
import {useHistory} from 'react-router-dom';

const Contact = () => {
    let history = useHistory();
    const [errors, setErrors] = useState({
        text: ''
    });

const FetchInputValues = (e) => {
    e.preventDefault()
    const {name, email, message} = e.target.elements;
    if (name.value === '' || email.value === '' || message.value === '') {
        setErrors({text:'Please fill out all forms!'})
    } else {
        myFirebase.database().ref(`contacts`)
    .push({
        name:name.value,
        email:email.value,
        message:message.value
    })
    history.push('/success');
    }
}
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md">
                
                </div>
                <div className="col-md-6">
                    <h1>Contact us</h1>

                    {errors.text !== '' && <div className="alert alert-danger" role="alert">
                        {errors.text}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>                            
                    </div>}
                    
                    <form onSubmit={FetchInputValues}>
                            <div class="mb-3">
                                <label for="name">Name</label>
                                <input name="name" type="text" class="form-control" id="name" placeholder="Enter name" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1">Email</label>
                                <input Name="email" placeholder="Enter email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>

                            <div class="mb-3">
                                <label for="message">Message</label>
                                <textarea className="form-control" type="text" name="message" placeholder="Type message .." id="message" />
                            </div>

                            <button type="submit" class="btn btn-primary">Send</button>
                        </form>
                </div>
                        <div className="col-md">
                        
                        </div>
            </div>
        </div>
    )
}

export default Contact;
