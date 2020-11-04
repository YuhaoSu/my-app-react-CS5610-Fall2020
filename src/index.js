import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";
import {SysManager} from"./components/SysManager";
import {combineReducers, createStore} from "redux";
import courseReducer from "./reducers/courseReducer";
import moduleReducer from "./reducers/moduleReducer";
import {lessonReducer} from "./reducers/lessonReducer";
import {topicReducer} from "./reducers/topicReducer";
import {widgetReducer} from "./reducers/widgetsReducer";
import "font-awesome/css/font-awesome.min.css";

const reducers = combineReducers({
    courseReducer, moduleReducer, lessonReducer, topicReducer, widgetReducer
})
const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <SysManager/>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
