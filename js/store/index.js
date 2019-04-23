// store入口

import {
    applyMiddleware,
    createStore,
} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import { middleware } from "../navigator/AppNavigators"

const logger = store => next => action => {
    if(typeof action === 'function') {
        console.log('dispatch a function')
    } else {
        console.log('diapatch', action)
    }
    const result = next(action)
    // console.log('nextState', store.getState())
    return result
}

const middlewares = [
    middleware,
    logger,
    thunk,
]

export default createStore(reducers, applyMiddleware(...middlewares))
