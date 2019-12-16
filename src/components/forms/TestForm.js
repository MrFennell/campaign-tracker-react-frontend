import React from 'react';
import {FormControl, Button} from 'react-bootstrap';
import { connect } from "react-redux";
import { setUser } from '../../redux/actions';
import axios from 'axios'

class TestForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        const user = {user: "Ryan", pass: "test", id: 1}
    }
    
    updateUsername = username => {
        this.setState({ username });
    }

    updatePassword = password => {
        this.setState({ password });
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.setUser({name: "Ryan", pass: "test", id: 1});
        const user = "changed"
    }

    // async handleSubmit(e){
    //     e.preventDefault();
    //     console.log(this.state.username);
    //     try{ 
            
    //     await axios.post('/users/login', {username: this.state.username, password: this.state.password})
    //         .then((response) => {
    //             console.log(response);
    //             // this.props.setUser(name:)
    //         });            
    //     }
    //     catch(e){
    //         console.error(e);
    //     }
        
    // }
    render(){
        return (
                <div>
                    <form 
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-inline">
                            <div className="col">
                                <FormControl 
                                    placeholder="Username" 
                                    type="text" 
                                    value={this.state.username}
                                    onChange={e => this.updateUsername(e.target.value)}
                                />
                            </div>
                            <div className="col">
                                <FormControl 
                                    placeholder="Password" 
                                    type="password" 
                                    value={this.state.password}
                                    onChange={e => this.updatePassword(e.target.value)}
                                />
                            </div>
                            <div className="col">    
                                <Button type="submit" disabled={!this.validateForm()} className="btn btn-primary">Submit</Button>
                            </div>
                        </div>
                    </form>
                </div>
            );
    }
};

// export default TestForm
export default connect(
    null,
    {setUser}
)(TestForm);
