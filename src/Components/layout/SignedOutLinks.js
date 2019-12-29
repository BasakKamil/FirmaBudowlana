import React from 'react';
import {NavLink} from 'react-router-dom';


const SignedOutLinks = () => {
    return(
        <div className="Box KamilaFront">
            <ul>
                <li><NavLink to="/signup">Zarejstruj się!</NavLink></li>
                <li><NavLink to="/signin">Zaloguj!</NavLink></li>
            </ul>
        </div>

    )
}

export default SignedOutLinks