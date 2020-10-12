import React from "react";
import "font-awesome/css/font-awesome.css"
import "./CourseEditorStyle.css"
import {findCourseById} from "../services/CourseService";
import ModuleList from "./ModuleList";
import TopicPills from "./TopicPills";
import LessonTabs from "./LessonTabs";

export default class CourseEditor extends React.Component {

    state = {
        course: {
            _id: "",
            title: ""
        }
    }

    componentDidMount() {
        console.log(this.props)
        findCourseById(this.props.match.params.courseId)
            .then(actualCourse => this.setState({
                course: actualCourse
            }))
    }

    render() {
        return(

            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <ModuleList courseTitle = {this.state.course.title}/>
                    </div>
                    <div className="col-9">

                        <LessonTabs/>

                        <br/>
                        <div>
                            <TopicPills/>
                            <div>
                                <br/>
                                <i className="fa fa-circle-thin float-right " aria-hidden="true"></i>
                                <h3 className="wbdv-heading-font postion-style float-right">Preview</h3>
                                <button className="float-right " styles={"margin-bottom: 10px"}>Save</button>

                                <br/>
                                <div className="wbdv-light-gray-border">
                                    <h2>Widgets</h2>
                                    <h2>Widgets</h2>
                                    <h3>Heading widgets
                                        <span className="pull-right">
            <a href="#" className="btn btn-warning">
                <i className="fa fa-arrow-up"></i>
            </a>
            <a href="#" className="btn btn-warning">
                <i className="fa fa-arrow-down"></i>
            </a>

            <select>
                <option>Heading</option>
                <option>Youtube</option>
                <option>Slides</option>
                <option>Image</option>
                <option>List</option>
            </select>
            <a href="#" className="btn btn-danger">
                <i className="fa fa-trash"></i>
            </a>
                </span>
                                    </h3>
                                    <input className="form-control" placeholder="heading text"/>
                                    <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    <input className="form-control" placeholder="heading text"/>


                                </div>
                                <i className="fa fa-plus pull-right wbdv-topics-add" aria-hidden="true"></i>
                            </div>
                            <div className="wbdv-text-position">
                                <label htmlFor="Preview">
                                    Preview
                                </label>
                                <textarea id="Preview" styles={"box-sizing: border-box"}>
                         dummy Paragraph text
                    </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
