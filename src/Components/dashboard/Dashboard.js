import React, { Component } from 'react'
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import {connect}from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {compose}from 'redux';
import { Redirect } from 'react-router-dom';

export class Dashboard extends Component {
    render() {
        const {projects, auth} = this.props;
//Jezeli nie jestesmy zalogowani to zwróci Redirect a jezeli jestesmy to przejdzie dalej :)
        if (!auth.uid) return <Redirect to='/signin' />
        //Tylko zalogowani:
        return (
            <div className="coinainer BasiCont">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5">
                         <Notifications/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    console.log(state);
    return{
        //te projekty ciagnie z utworzonych tutaj w App
        // projects: state.project.projects

        //te projekty zaciaga z Firestore!
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([ {collection: 'projects'}])
)(Dashboard) 

// export default connect(mapStateToProps)(Dashboard)
