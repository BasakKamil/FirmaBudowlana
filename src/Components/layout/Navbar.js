import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return(
        <div className="MenuBox">
            <div className="Kont">
                <Link to="/" className="BrandLogo">Logo Budowlanka</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </div>

    )
}

export default Navbar