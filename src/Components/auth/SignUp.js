import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

export class SignIn extends Component {
state={
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    city: '',
    postcode: ''
}

handleChange = (e) =>{
 this.setState({
     [e.target.id]:e.target.value
 })
}
handleSubmit = (e) =>{
    e.preventDefault();
 this.props.signUp(this.state)
}
    render() {
        const { auth, authError } = this.props;
        if(auth.uid) return <Redirect to='/'/>
        return (
            <div className="container BasiCont">
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
                    <label htmlFor="firstName">Imię :</label>
                    <input type="text" id="firstName" onChange={this.handleChange}></input>
                </div>
                <div className="input-fields">
                    <label htmlFor="lastName">Nazwisko :</label>
                    <input type="text" id="lastName" onChange={this.handleChange}></input>
                </div>
                <div className="input-fields">
                    <label htmlFor="phone">Telefon :</label>
                    <input type="text" id="phone" onChange={this.handleChange}></input>
                </div>
                <div className="input-fields">
                    <label htmlFor="address">Adres :</label>
                    <input type="text" id="address" onChange={this.handleChange}></input>
                </div>
                <div className="input-fields">
                    <label htmlFor="postcode">Kod Pocztowy :</label>
                    <input type="text" id="postcode" onChange={this.handleChange}></input>
                </div>
                <div className="input-fields">
                    <label htmlFor="city">Miasto :</label>
                    <input type="text" id="city" onChange={this.handleChange}></input>
                </div>
          
  
                <div className="input-fields">
                    <button className="btn btn-danger">Zarejstruj się!</button>
                </div>
        <div className="ErrorInf">{authError ? <p>{authError}</p> : null}</div>
            </form>
            
        </div>
        )
    }

}
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        authError: state.firebase.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
