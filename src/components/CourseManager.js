import React from "react";
import "font-awesome/css/font-awesome.css"
import "./CourseManagerStyle.css"
import CourseTable from "./CourseTable";
import CourseGridComponent from "./CourseGrid";
import {findAllCourses, updateCourse,deleteCourse, createCourse} from "../services/CourseService"

class CourseManager extends React.Component {

    state = {
        courses: [],
        courseBeingEdited: {},
        showingTable: this.props.showingTable
    }

    componentDidMount() {
        findAllCourses()
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
    }

    deleteCourse = (course) => {
        deleteCourse(course._id)
            .then(status => this.setState(prevState =>({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                })
            ))
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "me",
            modified: (new Date()).toDateString()
        }

        createCourse(newCourse)
            .then(actualCourse => this.setState(prevState => ({
                courses: [
                    ...prevState.courses, actualCourse
                ]
            })))
    }

    editCourse = (course) => {
        this.setState({
            courseBeingEdited: course
        })
    }

    changeToGrid = () => {
        this.setState({
            showingTable: false
        })
    }

    changeToTable = () => {
        this.setState({
            showingTable: true
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="wbdv-sticky-header wbdv-label wbdv-course-manager">
                    <i className="fa fa-align-justify wbdv-field wbdv-hamburger" aria-hidden="true">
                    </i>
                    Course Manager
                    <input type="text" className="wbdv-field wbdv-new-course" placeholder="New Course Title"/>
                    <i className="fa fa-plus-circle pull-right fa-2x wbdv-add-course-button wbdv-button wbdv-add-course"
                       onClick={this.addCourse}
                       aria-hidden="true">

                    </i>
                </h1>
                {
                    this.state.showingTable &&
                    <CourseTable showingGrid={this.changeToGrid} courses={this.state.courses} deleteCourse={this.deleteCourse}/>
                }
                {
                    !this.state.showingTable &&
                    <CourseGridComponent showingTable={this.changeToTable} courses={this.state.courses} deleteCourse={this.deleteCourse}/>

                }

            </div>
        );
    }
}

export default CourseManager




