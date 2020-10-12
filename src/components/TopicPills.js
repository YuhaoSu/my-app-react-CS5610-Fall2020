import React from "react";
import "font-awesome/css/font-awesome.css"
import "./CourseEditorStyle.css"
export default class TopicPills extends React.Component{
    render() {
        return (
            <div>
                <ul className="nav nav-pills wbdv-topic-pill-list">
                    <li className="nav-item wbdv-topic-pill"><a className="nav-link" href="#">Block</a></li>
                    <li className="nav-item wbdv-topic-pill"><a className="nav-link" href="#">Inline</a>
                    </li>
                    <li className="nav-item wbdv-topic-pill"><a className="nav-link" href="#">Topic 123</a>
                    </li>
                    <li className="nav-item wbdv-topic-pill"><a className="nav-link" href="#">Topic 456</a>
                    </li>
                    <li className="nav-item wbdv-topic-pill"><a className="nav-link" href="#">Topic 789</a>
                    </li>
                    <li><i className="fa fa-plus pull-right wbdv-module-add wbdv-topic-add-btn"
                           aria-hidden="true"></i></li>

                </ul>
            </div>
        );
    }
}
