import React from 'react';
import moment from 'moment';

const ProjectSummary = (props) =>{
    const {project} = props;
    
return(
    <div className="card Basicard">
        <title className="card-title">{project.title}</title>
        <h3>{project.title}</h3>
        <p>Data Wykonaia: {project.date}</p>
        <p>{project.content} </p>
        <p>Zlecił: {project.firstName} {project.lastName[0]}.</p>
        <p>{moment(project.createdAt.toDate()).calendar()}</p>
       
    </div>
)

}
export default ProjectSummary