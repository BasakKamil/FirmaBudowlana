import React from 'react';

const ProjectSummary = ({project}) =>{
return(
    <div className="card">
        <title className="card-title">{project.title}</title>
        <h3>{project.title}</h3>
        <p>{project.date}</p>
        <p>{project.content} </p>
    </div>
)

}
export default ProjectSummary