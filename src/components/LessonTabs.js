import React from "react";
import {lessonReducer} from "../reducers/lessonReducer";
import {connect} from "react-redux";
import lessonService from "../services/LessonService";
import {Link} from "react-router-dom";
import moduleService from "../services/ModuleService";
import courseReducer from "../reducers/courseReducer";

const LessonTabs = (
    {
        course,
        moduleId,
        lessons=[],
        createLessonForModule,
        deleteLesson,
        updateLesson,
        ok,
        edit
    }) =>
    <div>
        <h1>Lessons ({moduleId})</h1>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                        <li key={lesson._id} className="nav-item">
                            <a className="nav-link">
                                <button onClick={() => deleteLesson(lesson._id)}>
                                    <i className="fa fa-times"></i>
                                </button>
                                {
                                    !lesson.editing &&
                                    <span>
                                    <button onClick={() =>
                                    edit(lesson)}>
                                    <i className="fa fa-pencil"></i>
                                    </button>
                                        <Link to={`/edit/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}>
                                            {lesson.title}
                                        </Link>
                                    </span>
                                }
                                {
                                    lesson.editing &&
                                    <span>
                                    <button onClick={() =>
                                    ok(lesson)}>
                                    <i className="fa fa-check"></i>
                                    </button>
                                    <input
                                    onChange={(event) => updateLesson({
                                    ...lesson,
                                    title: event.target.value
                                    })}
                                    value={lesson.title}/>
                                    </span>
                                }
                            </a>
                        </li>)
            }
        </ul>
            <i className="fa fa-plus-circle"
               onClick={() => createLessonForModule(moduleId)}
               aria-hidden="true"></i>
    </div>

const stateToPropertyMapper = (state) => ({
    course: state.courseReducer.course,
    lessons: state.lessonReducer.lessons,
    moduleId: state.lessonReducer.moduleId,
})

const dispatchToPropertyMapper = (dispatch) => ({

    updateLesson: (lesson) =>
        dispatch({
            type: "UPDATE_LESSON",
            lesson: lesson
        }),
    ok: (lesson) =>
        lessonService.updateLesson(lesson._id, {
            ...lesson, editing: false
        }).then(status => dispatch({
            type: "UPDATE_LESSON",
            lesson: {...lesson, editing: false}
        })),

    edit: (lesson) =>
        lessonService.updateLesson(lesson._id, {
            ...lesson, editing: true
        }).then(status =>
            dispatch({
                type: "UPDATE_LESSON",
                lesson: {...lesson, editing: true}
            })),


    deleteLesson: (lessonId) =>
        lessonService.deleteLesson(lessonId)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonId
            })),
    createLessonForModule: (moduleId) =>
        lessonService.createLessonForModule(
            moduleId, {
                title: "New Lesson"
            })
            .then(actualLesson => dispatch({
                type: "CREATE_LESSON_FOR_MODULE",
                lesson: actualLesson
            }))
})

export default connect
(stateToPropertyMapper,
    dispatchToPropertyMapper)
(LessonTabs)
