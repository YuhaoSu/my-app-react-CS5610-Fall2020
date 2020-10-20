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


const reducers = combineReducers({
    courseReducer, moduleReducer, lessonReducer, topicReducer
})
const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <SysManager/>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
