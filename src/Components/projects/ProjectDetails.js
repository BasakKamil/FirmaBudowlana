
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) => {
  const { project,auth } = props;
if(!auth.uid) return <Redirect to='/signin'/>

  if(project){
    return(
    <div className="container BasiCont">
        <div className="card">
            <div className="card-content">
            <span className="card-title"> {project.title}</span>
            <p>{project.content} </p>
            <p>Data Wykonania: {project.date}</p>
            <p>{moment(project.createdAt.toDate()).calendar()}</p>
         </div>
         </div>
    </div>
    )
  } else {
    return(
            <div className="BasiCont">
                <p>Looading project...</p>
            </div>
        )
  }
    
}

const mapStateToProps = (state, ownProps) => {
    
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects? projects[id]: null
    return{
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([ {collection: 'projects'}])
)(ProjectDetails)