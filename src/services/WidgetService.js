// const WIDGET_URL = "http://localhost:8080/api/widgets"
// const TOPIC_URL  = "http://localhost:8080/api/topics"


const WIDGET_URL = "https://cs5610-java-server-yuhao.herokuapp.com/api/widgets"
const TOPIC_URL  = "https://cs5610-java-server-yuhao.herokuapp.com/api/topics"


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
            name: "Widget Name",
            type: "HEADING",
            size: 1,
            ordered: true,
            text: '',
            items: '',
            src:'http://icons.iconarchive.com/icons/aroche/delta/256/File-JPG-icon.png',
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
    fetch(`${WIDGET_URL}/${widgetId}`,{
        method: "DELETE"
    }).then(response => response.json())

export const findWidgetById = (widgetId) =>
    fetch(`${WIDGET_URL}/${widgetId}`)
        .then(response => response.json())

export const savaAllWidgets = (topicId, widgets) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`,{
        method: "PUT",
        body: JSON.stringify(widgets),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())


export default {
    findWidgetById,
    savaAllWidgets,
    findAllWidgets,
    createWidgetForTopic,
    findWidgetsForTopic,
    updateWidget,
    deleteWidget,
}
