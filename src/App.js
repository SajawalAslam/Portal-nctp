import React , {Component} from 'react';
import './App.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login-portal/login'


// import EnrolNav from './Components/student-courses/Enrolnav'


import Enrolcourses from './Components/student-enrol/enrol.js'
import SideNav from './Components/Sidenav/Sidemenu'
import Proltalhome from './Components/portal-home/Home'
import ChangePassword from './Components/ChangePassword/ChangePass'
import PaymentStatus from './Components/PaymentStatus/PaymentStatus'
import OnlineLectureCourse from './Components/OnlineLecturescourse/OnlineLectureCourse'

function App() {
  return (
    <Router>
    <div className="App ">
      <Switch>
        <Route exact path="/" component={Login} />
         
        <Route path="/Courses" component={Enrolcourses} />
        <Route path="/Home" component={Proltalhome} />
        
        <Route path="/ChangePassword" component={ChangePassword} />

        <Route path="/PaymentStatus" component={PaymentStatus} />

        <Route path="/OnlineLectureCourse" component={OnlineLectureCourse} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
