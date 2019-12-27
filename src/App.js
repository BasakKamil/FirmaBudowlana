import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Dashboard from './Components/dashboard/Dashboard';
import ThreeBack from './Components/Animacje/ThreeBack';
import ProjectDetails from './Components/projects/ProjectDetails';
import SignIn from './Components/auth/SignIn';

function App() {
  
  return (

    <BrowserRouter>
      <div className="App">
         <h1>BUDOWLANKA </h1>
         <Navbar/>
         <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/project/:id" component={ProjectDetails}/>
            <Route path="/signin" component={SignIn}/>
         </Switch>
     </div>
     <ThreeBack/>
    </BrowserRouter>
  );
}

export default App;
