import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import CourseManager from "./components/CourseManager";
import * as serviceWorker from './serviceWorker';
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import {BrowserRouter, Link, Route} from "react-router-dom";
import CourseEditor from "./components/CourseEditor";

ReactDOM.render(
    <BrowserRouter>
        <div className="container">
            <Link to="/login">Login</Link> |
            <Link to="/register">Register</Link> |
            <Link to="/profile">Profile</Link> |
            <Link to="/courses">Courses</Link> |
            <Link to="/edit">Editor</Link>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/courses" exact>
                <CourseManager instructor="Jse" term="fall 2020"/>
            </Route>
            <Route path="/edit/:courseId" exact component={CourseEditor}/>

    </div>
    </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
