import React, { Component } from 'react';
import axios from 'axios';
import {Container,Alert} from 'reactstrap';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
    super(props);

    this.state = {
        username: '',
        password: '',
        alert: '',
        isLogged: false
    }}

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    
    onChangePassword = (e) => {
        this.setState({
        password: e.target.value
        })
    }


    onSubmit = (e) => {
        e.preventDefault();

        const username =  this.state.username;
        const password = this.state.password;
        const user = { username,password };

        axios.post('/login', user)
            .then(res => {
                if(res.data.access_token) {
                    this.setState({
                        isLogged: true
                    });
                    localStorage.setItem('user',JSON.stringify({
                        username: username,
                        password: password
                    }));
                } else {
                    this.setState({
                        alert: res.data.message
                    })
                }
            });
    }

    render() {
        const user = localStorage.getItem('user');
        if(this.state.isLogged === true || user !== null) {
            return <Redirect to='/book' />
        } else return (
            <Container className="mt-3">
                <h3>Login form</h3>
                {
                    this.state.alert !== '' ? <Alert color="danger">{this.state.alert}</Alert> : ''
                }
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                </form>
            </Container>
        )
    }
}