import React, { Component } from 'react'


export class CreateProject extends Component {
state={
    title: '',
    content: '',
    date: ''
}

handleChange = (e) =>{
 this.setState({
     [e.target.id]:e.target.value
 })
}
handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state);
}
    render() {
        return (
            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <h5>Dodaj Usługę</h5>
                <div className="input-fields">
                    <label htmlFor="title">Nazwa usługi</label>
                    <input type="text" id="title" onChange={this.handleChange}></input>
                </div>
                <div className="input-fields">
                    <label htmlFor="content">Co trzeba wykonać: </label>
                    <textarea type="text" id="content" className="materialize-textarea" onChange={this.handleChange}/>
                </div>
                <div className="input-fields">
                    <label htmlFor="date">Data</label>
                    <input type="text" id="date" onChange={this.handleChange}></input>
                </div>
                <div className="input-fields">
                    <button className="btn btn-danger">Zaloguj</button>
                </div>
            </form>
            
        </div>
        )
    }
}

export default CreateProject
