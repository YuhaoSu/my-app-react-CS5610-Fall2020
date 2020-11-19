// import {DELETE_WIDGET, CREATE_WIDGET, UPDATE_WIDGET} from "../actions/widgetActions"

const initialState = {
    widgets: [],
    editing: true,
}

export const widgetReducer = (state = initialState, action) => {
    switch (action.type) {

        case "MOVE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }

        case "EDITING_WIDGET":
            return {
                ...state,
                editing: true,
                topicId: action.topicId
            }

        case "EDITING_WIDGET_FALSE":
            return {
                ...state,
                editing: false,
                topicId: action.topicId
            }

        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets,
                topicId: action.topicId
            }
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }

        case "CREATE_WIDGET_FOR_TOPIC":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }


        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(
                    widget => widget.id === action.widget.id ?
                        action.widget : widget)
            }
        default:
            return state
    }
}

// case "FIND_ALL_WIDGETS":
//     return {
//         ...state,
//         widgets: action.widgets
//     }
