import React, { Component } from 'react'
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import {connect}from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {compose}from 'redux';

export class Dashboard extends Component {
    render() {
        const {projects} = this.props;
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
    return{
        projects: state.project.projects
    }
}

export default compose(
   firestoreConnect(['projects']), connect(mapStateToProps)
)(Dashboard) 

// export default connect(mapStateToProps)(Dashboard)
