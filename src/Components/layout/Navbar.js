import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return(
        <div className="Logo">
            <div className="coinainer">
                <Link to="/" className="BrandLogo">Logo</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </div>

    )
}

export default Navbar