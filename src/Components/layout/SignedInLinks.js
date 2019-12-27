import React from 'react';
import {NavLink} from 'react-router-dom';


const SignedInLinks = () => {
    return(
        <div className="Box">
            <ul>
                <li><NavLink to="/">Nowe Zlecenie</NavLink></li>
                <li><NavLink to="/">Wyloguj!</NavLink></li>
            </ul>
        </div>

    )
}

export default SignedInLinks