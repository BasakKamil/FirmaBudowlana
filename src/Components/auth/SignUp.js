import React, { Component } from 'react'


export class SignIn extends Component {
state={
    email: '',
    password: '',
    firstname: '',
    surname: '',
    address: '',
    phone: '',
    city: ''
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
            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <h5>Zarejstruj się</h5>
                <div className="input-fields">
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" onChange={this.handleChange}></input>
                </div>
                <div className="input-fields">
                    <label htmlFor="password">Hasło :</label>
                    <input type="password" id="password" onChange={this.handleChange}></input>
                </div>
                <div className="input-fields">
                    <label htmlFor="firstname">Imię :</label>
                    <input type="text" id="firstname" onChange={this.handleChange}></input>
                </div>
                <div className="input-fields">
                    <label htmlFor="surname">Nazwisko :</label>
                    <input type="text" id="surname" onChange={this.handleChange}></input>
                </div>
                <div className="input-fields">
                    <label htmlFor="address">Adres :</label>
                    <input type="text" id="address" onChange={this.handleChange}></input>
                </div>
                <div className="input-fields">
                    <label htmlFor="city">Miasto :</label>
                    <input type="text" id="city" onChange={this.handleChange}></input>
                </div>
                <label htmlFor="city">Kraj : </label>
                <select id="country">
                         <option value="">Polska</option>
                         <option value="dog">Anglia</option>
                         <option value="cat">Niemcy</option>
                         <option value="hamster">Holandia</option>
                         
                </select>
                <div className="input-fields">
                    <button className="btn btn-danger">Zaloguj</button>
                </div>
            </form>
            
        </div>
        )
    }
}

export default SignIn
