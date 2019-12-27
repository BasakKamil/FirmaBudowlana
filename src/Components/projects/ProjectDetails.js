
import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return(
        <div className="container">
            <div className="card">
                <div className="card-content">
                    <span className="card-title"> Nazwa Projektu {id}</span>
                    <p>Opis</p>
                </div>
            </div>
        </div>
    )
}
export default ProjectDetails