import React from 'react';
import {NavLink} from 'react-router-dom';


const SignedOutLinks = () => {
    return(
        <div className="Box">
            <ul>
                <li><NavLink to="/">Zarejstruj się!</NavLink></li>
                <li><NavLink to="/">Zaloguj!</NavLink></li>
            </ul>
        </div>

    )
}

export default SignedOutLinks