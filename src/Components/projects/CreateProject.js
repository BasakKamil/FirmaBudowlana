import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';


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
    // console.log(this.state);
    this.props.createProject(this.state);
}
    render() {
        const { auth } = this.props;
        //Jezeli nie jestesmy zalogowani to przeniesie nas do logowania
        if(auth.id) return <Redirect to='/signin'/>
        //jezeli jestesmy to przejdzie dalej
        return (
            <div className="container BasiCont">
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
                    <input type="date" id="date" onChange={this.handleChange}></input>
                </div>
                <div className="input-fields">
                    <button className="btn btn-success">Utwórz Zlecenie!</button>
                </div>
            </form>
            
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)
//1 parametr zawsze mapStateToProps - 2 jest mapDispatch...
