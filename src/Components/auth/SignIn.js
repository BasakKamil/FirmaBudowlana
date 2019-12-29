import React, { Component } from 'react'


export class SignIn extends Component {
state={
    email: '',
    password: ''
}

handleChange = (e) =>{
 this.setState({
     [e.target.id]:e.target.value
 })
}
handleSubmit = (e) =>{
    e.preventDefault();
 console.log(this.state);
}
    render() {
        return (
            <div className="container BasiCont">
            <form onSubmit={this.handleSubmit}>
                <h5>Zaloguj się</h5>
                <div className="input-fields">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}></input>
                </div>
                <div className="input-fields">
                    <label htmlFor="password">Hasło</label>
                    <input type="password" id="password" onChange={this.handleChange}></input>
                </div>
                <div className="input-fields">
                    <button className="btn btn-danger">Zaloguj</button>
                </div>
            </form>
            
        </div>
        )
    }
}

export default SignIn
