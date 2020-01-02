import React from 'react';

const ProjectSummary = (props) =>{
    const {project} = props;
    console.log(project)
return(
    <div className="card">
        <title className="card-title">{project.title}</title>
        <h3>{project.title}</h3>
        <p>{project.date}</p>
        <p>{project.content} </p>
        <p>Zlecił: {project.firstName} {project.lastName[0]}.</p>
    </div>
)

}
export default ProjectSummary