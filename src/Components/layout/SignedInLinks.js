import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return(
        <div className="Box KamilaFront">
            <ul>
                <li><NavLink to="/createproject">Nowe Zlecenie</NavLink></li>
                <li><button className="btn btn-danger BasiBut" onClick={props.signOut}> Wyloguj! </button></li>
                <li><p className="Inicials">Witaj: {props.profile.firstName} {props.profile.lastName}</p> </li>
            </ul>
        </div>

    )
}
const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)