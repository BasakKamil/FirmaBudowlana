import React, { Component } from 'react'

export class SignOut extends Component {
    state = {

    }
    render() {
        return (
            <div className="container">
                <form onSubmit={}>
                    <h5>Zaloguj się</h5>
                    <div className="input-fields">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={}></input>
                    </div>
                    <div className="input-fields">
                        <label htmlFor="password">Hasło</label>
                        <input type="password" id="password" onChange={}></input>
                    </div>
                    <div className="input-fields">
                        <button className="btn btn-danger">Zaloguj</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SignOut
