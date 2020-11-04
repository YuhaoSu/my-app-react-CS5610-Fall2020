import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import CourseGrid from "./CourseGrid";
import CourseManager from "./CourseManager";
import CourseEditor from "../containers/CourseEditor";

export class SysManager extends React.Component {
    state = {
        courses: [],
        showingTable: true
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Link to="/login">Login</Link> |
                    <Link to="/register">Register</Link> |
                    <Link to="/profile">Profile</Link> |
                    <Link to="/table">Courses</Link> |
                    <Link to="/grid">Grid</Link> |
                    <Link to="/edit">Editor</Link>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/profile" exact component={Profile}/>

                    <Route path="/table" exact>
                        <CourseManager showingTable={true}/>
                    </Route>

                    <Route path="/grid" exact>
                        <CourseManager showingTable={false}/>
                    </Route>
                    <Route
                        path={[
                            "/edit/:courseId",
                            "/edit/:courseId/modules/:moduleId",
                            "/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                            "/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"]}
                        exact
                        component={CourseEditor}/>

                </div>
            </BrowserRouter>
        );
    }
}