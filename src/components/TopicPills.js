import React from "react";
import "font-awesome/css/font-awesome.css"
import "../containers/CourseEditorStyle.css"

import {topicReducer} from "../reducers/topicReducer";
import {connect} from "react-redux";
import topicService from "../services/TopicService";
import {Link} from "react-router-dom";
import lessonService from "../services/LessonService";

const TopicPills = (
    {
        moduleId,
        course,
        lessonId,
        topics=[],
        createTopicForLesson,
        deleteTopic,
        updateTopic,
        ok,
        edit
    }) =>
    <div>
        <h2>Topics ({lessonId})</h2>
        <ul className="nav nav-pills wbdv-topic-pill-list">
            {
                topics.map(topic =>
                        <li key={topic._id} className="nav-item wbdv-topic-pill">
                            <a className="nav-link">
                                <button onClick={() => deleteTopic(topic._id)}>
                                    <i className="fa fa-times"></i>
                                </button>
                                {
                                    !topic.editing &&
                                    <span>
                                        <button onClick={() =>
                                        edit(topic)}>
                                        <i className="fa fa-pencil"></i>
                                        </button>
                                        <Link to={`/edit/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}>
                                        {topic.title}
                                        </Link>
                                    </span>
                                }
                                {
                                    topic.editing &&
                                    <span>
                                        <button onClick={() =>
                                        ok(topic)}>
                                        <i className="fa fa-check"></i>
                                        </button>
                                        <input
                                            onChange={(event) => updateTopic({
                                                ...topic,
                                                title: event.target.value
                                            })}
                                            value={topic.title}/>
                                    </span>
                                }
                            </a>
                        </li>)
            }

        </ul>

            <i className="fa fa-plus-circle"
               onClick={() => createTopicForLesson(lessonId)}
                aria-hidden="true"></i>
            </div>

const stateToPropertyMapper = (state) => ({
    course: state.courseReducer.course,
    moduleId: state.lessonReducer.moduleId,
    topics: state.topicReducer.topics,
    lessonId: state.topicReducer.lessonId
})

const dispatchToPropertyMapper = (dispatch) => ({

    updateTopic: (topic) =>
        dispatch({
            type: "UPDATE_TOPIC",
            topic: topic
        }),
    ok: (topic) =>
        topicService.updateTopic(topic._id, {
            ...topic, editing: false
        }).then(status => dispatch({
            type: "UPDATE_TOPIC",
            topic: {...topic, editing: false}
        })),

    edit: (topic) =>
        topicService.updateTopic(topic._id, {
            ...topic, editing: true
        }).then(status =>
            dispatch({
                type: "UPDATE_TOPIC",
                topic: {...topic, editing: true}
            })),


    deleteTopic: (topicId) =>
        topicService.deleteTopic(topicId)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicId
            })),
    createTopicForLesson: (lessonId) =>
        topicService.createTopicForLesson(
            lessonId, {
                title: "New Topic"
            })
            .then(actualTopic => dispatch({
                type: "CREATE_TOPIC_FOR_LESSON",
                topic: actualTopic
            }))

})


export default connect
(stateToPropertyMapper,
    dispatchToPropertyMapper)
(TopicPills)