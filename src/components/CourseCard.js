import React from "react";
import "./CourseManagerStyle.css"
import {Link, Route} from "react-router-dom";
import {updateCourse} from "../services/CourseService";

export default class CourseCard extends React.Component{
    state = {
        editing: false,
        course: this.props.course
    }

    render(){
        return(
            <div className="col md-4">
                <div className="active">
                    {
                        this.state.editing &&
                        <input
                            className="form-control"
                            onChange={(event) => {
                                const newTitle = event.target.value
                                this.setState(prevState => ({
                                    course: {...prevState.course, title: newTitle}
                                }))}
                            }
                            value={this.state.course.title}/>
                    }
                    {
                        !this.state.editing &&
                        <Link to={`/edit/${this.props.course._id}`}>{this.props.course.title} {this.props.course._id}
                        </Link>
                    }

                </div>
                <div>{this.props.course.owner}</div>
                <div>{this.props.course.modified}</div>
                <div>
                    <button
                        onClick={() => this.props.deleteCourse(this.props.course)}
                        className="btn btn-danger">
                        Delete
                    </button>
                    {
                        !this.state.editing &&
                        <button
                            onClick={() => this.setState({editing: true})}
                            className="btn btn-primary">Edit</button>
                    }
                    {
                        this.state.editing &&
                        <button
                            onClick={() => {
                                updateCourse(this.state.course._id, this.state.course)
                                    .then(status => this.setState({editing: false}))
                            }}
                            className="btn btn-primary">OK</button>
                    }
                </div>
            </div>
        )
    }
}








