import ActionType from '../../actions/types'
const defaultState = {}

export default function Today(state=defaultState, action) {
    switch(action.type) {
        case ActionType.SET_TODAY_DATA:
            const { payload } = action
            return {
                ...state,
                list: payload
            }
        default:
            return state
    }
}
