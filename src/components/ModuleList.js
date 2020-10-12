import React from "react";
import "font-awesome/css/font-awesome.css"
import "./CourseEditorStyle.css"
export default class ModuleList extends React.Component{
    render() {
        return (
            <div>
                <i className="fa fa-2x fa-times-circle wbdv-course-editor wbdv-close"
                   aria-hidden="true"></i>
                <h2 className="wbdv-course-title">{this.props.courseTitle}</h2>
                <ul className="list-group wbdv-module-list">
                    <li className="list-group-item wbdv-module-item">HTML
                        <i className="fa fa-times pull-right wbdv-module-item-delete-btn"></i>
                    </li>
                    <li className="list-group-item active wbdv-module-item">CSS
                        <i className="fa fa-times pull-right wbdv-module-item-delete-btn"></i>
                    </li>
                    <li className="list-group-item wbdv-module-item">JavaScript
                        <i className="fa fa-times pull-right wbdv-module-item-delete-btn"></i>
                    </li>
                    <li className="list-group-item wbdv-module-item">React
                        <i className="fa fa-times pull-right wbdv-module-item-delete-btn"></i>
                    </li>
                    <li className="list-group-item wbdv-module-item">Redux
                        <i className="fa fa-times pull-right wbdv-module-item-delete-btn"></i>
                    </li>
                </ul>
                <i className="fa fa-plus pull-right wbdv-module-add wbdv-module-item-add-btn"
                   aria-hidden="true"></i>
            </div>
        );
    }
}
