import React from "react";
import "font-awesome/css/font-awesome.css"
import "./CourseEditorStyle.css"

import {connect} from "react-redux";
import {findCourseById} from "../services/CourseService";
import ModuleList from "../components/ModuleList";
import TopicPills from "../components/TopicPills";
import LessonTabs from "../components/LessonTabs";
import moduleService from "../services/ModuleService"
import lessonService from "../services/LessonService"
import topicService from "../services/TopicService"
import {Link} from "react-router-dom";

class CourseEditor extends React.Component {

    componentDidMount() {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        if(moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
        if(lessonId) {
            this.props.findTopicsForLesson(lessonId)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        if(moduleId !== prevProps.match.params.moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
        if(lessonId!== prevProps.match.params.lessonId) {
            this.props.findTopicsForLesson(lessonId)
        }
    }

    render() {
        return(
            <div className="container">

                <h1>
                     <i className="fa fa-times-circle"
                        onClick={() => window.history.go(-1)}
                        aria-hidden="true">
                     </i>
                    Modules for {this.props.course.title}
                </h1>

                <div className="row">
                    <div className="col-3">
                        <ModuleList/>
                    </div>
                    <div className="col-9">
                        <LessonTabs/>
                        <br/>
                        <div>
                            <TopicPills/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
const stateToPropertyMapper = (state) => ({
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    findCourseById: (courseId) => findCourseById(courseId)
        .then(actualCourse => dispatch({
            type: "SET_COURSES",
            course: actualCourse
        })),
    findModulesForCourse: (courseId) => moduleService.findModulesForCourse(courseId)
        .then(actualModules => dispatch({
            type: "FIND_MODULES_FOR_COURSE",
            modules: actualModules
        })),
    findLessonsForModule: (moduleId) =>
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons,
                moduleId
            })),
    findTopicsForLesson: (lessonId) =>
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics,
                lessonId
            }))
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditor)