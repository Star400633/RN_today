import { combineReducers } from 'redux'
import today from './today'
import { rootCom, RootNavigator } from '../navigator/AppNavigators'

const navState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom))

const navReducer = (state=navState, action) => {
    const nextState = RootNavigator.router.getStateForAction(action, state)
    return nextState || state
}

const indexReducer = combineReducers({
    nav: navReducer,
    today,
})

export default indexReducer
