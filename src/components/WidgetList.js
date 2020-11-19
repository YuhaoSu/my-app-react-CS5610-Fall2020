import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import widgetService from "../services/WidgetService";
import ListWidget from "./widgets/ListWidget";
import {UPDATE_WIDGET} from "../actions/widgetActions";
import ImageWidget from "./widgets/ImageWidget";

const WidgetList =
    ({
         topicId,
         widgets=[],
         deleteWidget,
         createWidgetForTopic,
         updateWidget,
         editing,
         moveUpWidget,
         moveDownWidget,
         editingWidget,
         editingWidgetFalse,
         saveAll,
    }) =>
    <div>
        {
            editing &&
            <i
                onClick={()=>editingWidgetFalse(topicId)}
                className="fa fa-toggle-off float-right fa-2x" aria-hidden="true"
            >
                <h4 className="float-right">PREVIEW</h4>
            </i>}

        {
            !editing &&
            <i
                onClick={()=>editingWidget(topicId)}
                className="fa fa-toggle-on float-right fa-2x" aria-hidden="true"
            >
                <h4 className="float-right">PREVIEW</h4>
            </i>}

        <i
            onClick={()=>saveAll(topicId,widgets)}
            className="fa fa-floppy-o float-right fa-2x" aria-hidden="true"
        >
        </i>


        <br/>
        <br/>
        <ul>
            {
                widgets.map((widget, index) =>
                        <li key={widget.id}>
                            { widget.type === "HEADING" &&
                                <HeadingWidget
                                    widget={widget}
                                    widgets={widgets}
                                    editing={editing}
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}
                                    index={index}
                                    moveUpWidget={moveUpWidget}
                                    moveDownWidget={moveDownWidget}
                                />
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    widget={widget}
                                    widgets={widgets}
                                    editing={editing}
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}
                                    index={index}
                                    moveUpWidget={moveUpWidget}
                                    moveDownWidget={moveDownWidget}
                                />
                            }
                            { widget.type === "LIST" &&
                            <ListWidget
                                widget={widget}
                                widgets={widgets}
                                editing={editing}
                                deleteWidget={deleteWidget}
                                updateWidget={updateWidget}
                                index={index}
                                moveUpWidget={moveUpWidget}
                                moveDownWidget={moveDownWidget}
                            />
                            }
                            { widget.type === "IMAGE" &&
                            <ImageWidget
                                widget={widget}
                                widgets={widgets}
                                editing={editing}
                                deleteWidget={deleteWidget}
                                updateWidget={updateWidget}
                                index={index}
                                moveUpWidget={moveUpWidget}
                                moveDownWidget={moveDownWidget}
                            />
                            }
                            <br/>
                        </li>
                )
            }
            {console.log(widgets)}
        </ul>
        <button onClick={()=>createWidgetForTopic(topicId)}>Create</button>
    </div>

// export default WidgetList

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
    topicId: state.widgetReducer.topicId,
    editing: state.widgetReducer.editing,
    preview: state.widgetReducer.preview

})

const propertyToDispatchMapper = (dispatch) => ({
    saveAll:(topicId, widgets)=>
        widgetService.savaAllWidgets(topicId,widgets),

    moveUpWidget: (widgets) =>
        dispatch({
            type: "MOVE_WIDGET" ,
            widgets: widgets
        }),

    moveDownWidget: (widgets) =>
        dispatch({
            type: "MOVE_WIDGET" ,
            widgets: widgets
        }),

    editingWidget:(topicId)=>
        dispatch({
            type: "EDITING_WIDGET" ,
            topicId: topicId
        }),

    editingWidgetFalse:(topicId)=>
        dispatch({
            type: "EDITING_WIDGET_FALSE" ,
            topicId: topicId
        }),


    deleteWidget: (widgetId) =>
        widgetService.deleteWidget(widgetId)
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                widgetId
            })),
    createWidgetForTopic: (topicId) =>
        widgetService.createWidgetForTopic(
            topicId, {
                title: "New Widget"
            })
            .then(actualWidget => dispatch({
                type: "CREATE_WIDGET_FOR_TOPIC",
                widget: actualWidget
            })),

    updateWidget: (widget) =>
        dispatch({
            type: "UPDATE_WIDGET",
            widget: widget
        }),


})


export default connect
( stateToPropertyMapper,
    propertyToDispatchMapper)
(WidgetList)
