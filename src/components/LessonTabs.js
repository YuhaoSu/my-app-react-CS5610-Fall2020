import React from "react";
import "font-awesome/css/font-awesome.css"
import "./CourseEditorStyle.css"
export default class LessonTabs extends React.Component{
    render() {
        return (
            <div>
                <ul className="nav nav-tabs wbdv-lesson-tabs">
                    <li className="nav-item"><a className="nav-link" href="#">Tags</a></li>
                    <li className="nav-item"><a className="nav-link active" href="#">Elements</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Attributes</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Headings</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Tables</a></li>
                    <li><i className="fa fa-plus pull-right wbdv-module-add wbdv-lesson-add-btn"
                           aria-hidden="true"></i></li>
                </ul>
            </div>
        );
    }
}
