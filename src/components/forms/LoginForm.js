import React, { useState } from 'react';
import {FormControl, Button} from 'react-bootstrap';
import { connect } from "react-redux";
import { setUser } from '../../redux/actions';

import axios from 'axios'

export default function LoginForm(props){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function validateForm() {
        return userName.length > 0 && password.length > 0;
    }

    // function setNewUser = (e) => {
        
    // }

    async function handleSubmit(e){
        e.preventDefault();
        console.log(userName+password);
        try{ 
            
            await axios.post('/users/login', {username: userName, password: password})
                // .then((response) => {
                   
                //     // return axios.get('http://localhost:8000/campaigns', {username: userName});
                //     return axios.get('http://localhost:8000/current');
                // })
                .then((response) => {
                    console.log('Response', response);
                }).catch(function (error) {
                    console.log(error);
                });
                            
        }
        catch(e){
            console.error(e);
        }
        
    }
    
    return (
        <div>
            <form 
            onSubmit={handleSubmit}
            >
                <div className="form-inline">
                    <div className="col">
                        <FormControl 
                            placeholder="Username" 
                            type="text" 
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <FormControl 
                            placeholder="Password" 
                            type="password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="col">    
                        <Button type="submit" disabled={!validateForm()} className="btn btn-primary">Submit</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};