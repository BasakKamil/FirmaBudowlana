import React from 'react';

const ProjectSummary = ({project}) =>{
return(
    <div className="card">
        <title className="card-title">{project.title}}</title>
        <p>{project.id}</p>
        <p>{project.content} </p>
    </div>
)

}
export default ProjectSummary