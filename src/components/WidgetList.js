import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import widgetService from "../services/WidgetService";

const WidgetList =
    ({
         topicId,
         widgets=[],
         deleteWidget,
         createWidgetForTopic,
         updateWidget,
         editWidget,
         okWidget,
         editing,
         preview,
    }) =>
    <div>
        <ul>
            {
                widgets.map(widget =>
                        <li key={widget.id}>
                            { widget.type === "HEADING" &&
                                <HeadingWidget
                                    widget={widget}
                                    editing={editing}
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}
                                    editWidget={editWidget}
                                    okWidget={okWidget}
                                    preview={preview}
                                />
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    widget={widget}
                                    editing={editing}
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}
                                    editWidget={editWidget}
                                    okWidget={okWidget}
                                    preview={preview}
                                />
                            }







                {/*            {*/}
                {/*                editing &&*/}
                {/*                <span><input*/}
                {/*                    onChange={(event) => updateWidget({*/}
                {/*                        ...widget,*/}
                {/*                        name: event.target.value*/}
                {/*                    })}*/}
                {/*                    value={widget.name}/>*/}
                {/*<button onClick={() => okWidget(widget)}>*/}
                {/*  Ok*/}
                {/*</button>*/}
                {/*</span>*/}
                {/*            }*/}
                {/*            {*/}
                {/*                !editing &&*/}
                {/*                <span>*/}
                {/*  {widget.name}*/}

                {/*                    {*/}
                {/*                        widget.type === "HEADING" &&*/}
                {/*                        <HeadingWidget widget={widget} editing={editing}/>*/}
                {/*                    }*/}
                {/*                    {*/}
                {/*                        widget.type === "PARAGRAPH" &&*/}
                {/*                        <ParagraphWidget/>*/}
                {/*                    }*/}
                {/*                    <button onClick={() => editWidget(widget)}>*/}
                {/*    Edit*/}
                {/*  </button>*/}
                {/*</span>*/}
                {/*            }*/}

                        </li>
                )
            }
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
    editWidget: (widget) =>
        widgetService.updateWidget(widget.id, {
            ...widget, editing: true
        }).then(status =>
            dispatch({
                type: "UPDATE_WIDGET",
                widget: {...widget, editing: true}
            })),
    okWidget: (widget) =>
        widgetService.updateWidget(widget.id, {
            ...widget, editing: false
        }).then(status => dispatch({
            type: "UPDATE_WIDGET",
            widget: {...widget, editing: false}
        }))

})


export default connect
( stateToPropertyMapper,
    propertyToDispatchMapper)
(WidgetList)
