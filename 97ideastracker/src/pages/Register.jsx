import React, { Component } from 'react';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // handle the registration logic here
    }

    render() {
        return (
            <div>
                <h2>Register</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type="text" name="username" onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default RegisterPage;