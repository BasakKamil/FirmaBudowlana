import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';


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
    this.props.signIn(this.state);
}
    render() {
        const {authError, auth} = this.props;
        if(auth.uid) return <Redirect to='/'/>
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
                    <button className="btn btn-success">Zaloguj</button>
                </div>
                <div className="ErrorInf">{authError ? <p>{authError}</p> : null}</div>
            </form>
            
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDipatchToProps = (dispatch) => {
    return{
        signIn: (credentionals) => dispatch(signIn(credentionals))
    }
}

export default connect(mapStateToProps,mapDipatchToProps)(SignIn)
