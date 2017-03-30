/**
 * Created by xiawei05 on 17/3/30.
 */
import { Route, Router, hashHistory } from 'react-router';
import IndexPage  from './page/Index/index'
import OtherPage from  './page/Other/other'
import React from 'react'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import updateName from './reducers/indexReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleWare from 'redux-thunk'

if(process.env.NODE_ENV === "development") {
    const createStoreWithMiddleware = applyMiddleware(
        createLogger,
        thunkMiddleWare
    )(createStore)
    var store = createStoreWithMiddleware(
        combineReducers({
            reducers: updateName,
            routing: routerReducer
        })
    )
} else {
    var store = createStore(
        combineReducers({
            reducers: updateName,
            routing: routerReducer
        })
    )
}



const history = syncHistoryWithStore(hashHistory, store);

export default (
    <Provider store={ store } >
        <Router history={ history }>
            <Route path="/" component={ IndexPage }/>
            <Route path="/other" component={ OtherPage }/>
        </Router>
    </Provider>
)