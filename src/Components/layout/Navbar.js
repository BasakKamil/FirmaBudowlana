import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth, profile } = props;
    console.log(profile);
    const links = auth.uid ?  <SignedInLinks profile={profile}/> : <SignedOutLinks/>;
    return(
        <div className="MenuBox">
            <div className="Kont">
                <Link to="/" className="BrandLogo">Logo Budowlanka</Link>
                {links}
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return{
       auth: state.firebase.auth,
       //Wyciagne dane uzytkowanika do wyswietlenia po zalogowaniu
       profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)