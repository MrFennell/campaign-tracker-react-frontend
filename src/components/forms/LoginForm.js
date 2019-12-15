import React, { useState } from 'react';
// import FormInput from './formControls/FormInput';
// import FormSubmit from './formControls/FormSubmit';
import {FormControl, Button} from 'react-bootstrap';

export default function LoginForm(props){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function validateForm() {
    return userName.length > 0 && password.length > 0;
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(userName);
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