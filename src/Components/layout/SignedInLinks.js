import React from 'react';
import {NavLink} from 'react-router-dom';


const SignedInLinks = () => {
    return(
        <div className="Box KamilaFront">
            <ul>
                <li><NavLink to="/createproject">Nowe Zlecenie</NavLink></li>
                <li><NavLink to="/">Wyloguj!</NavLink></li>
            </ul>
        </div>

    )
}

export default SignedInLinks