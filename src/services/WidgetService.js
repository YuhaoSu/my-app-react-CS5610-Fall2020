// const WIDGET_URL = "http://localhost:8080/api/widgets"
// const TOPIC_URL  = "http://localhost:8080/api/topics"

const WIDGET_URL = "http://sheltered-brook-47348.herokuapp.com/api/widgets"
const TOPIC_URL  = "http://sheltered-brook-47348.herokuapp.com/api/topics"


// const WIDGET_URL = "https://wbdv-generic-server.herokuapp.com/api/Yuhao-Augus-Su/widgets"
// const TOPIC_URL  = "https://wbdv-generic-server.herokuapp.com/api/Yuhao-Augus-Su/topics"


export const findAllWidgets = () =>
    fetch(WIDGET_URL)
        .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`)
        .then(response => response.json())


export const createWidgetForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify({
            name: "NEW HEADING",
            type: "list",
            url: "http://icons.iconarchive.com/icons/aroche/delta/256/File-JPG-icon.png"
        }),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const updateWidget = (widgetId, newWidget) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(newWidget),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const deleteWidget = (widgetId) =>
    // fetch(`${WIDGET_URL}/${widgetId}`,{
    //     method: "DELETE"
    // }).then(response => response.json())
    fetch(`${WIDGET_URL}/${widgetId}`,{
        method: "DELETE"
    }).then(response => response.json())



export default {
    findAllWidgets,
    createWidgetForTopic,
    findWidgetsForTopic,
    updateWidget,
    deleteWidget,
}
