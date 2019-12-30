import React from 'react';
import './App.css';
import './index.scss';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Dashboard from './Components/dashboard/Dashboard';
import ThreeBack from './Components/Animacje/ThreeBack';
import ProjectDetails from './Components/projects/ProjectDetails';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import CreateProject from './Components/projects/CreateProject';

function App() {
  
  return (

    <BrowserRouter>
      <div className="App">
         <Navbar/>
         <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/project/:id" component={ProjectDetails}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/createproject" component={CreateProject}/>

         </Switch>
     </div>
     <ThreeBack/>
    </BrowserRouter>
  );
}

export default App;
