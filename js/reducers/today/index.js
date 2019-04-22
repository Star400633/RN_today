import ActionType from '../../actions/types'
const defaultState = {}

export default function Today(state=defaultState, action) {
    switch(action.type) {
        case ActionType.SET_TODAY_DATA:
            const { data } = action
            return {
                ...state,
                newData: new Date().getTime(),
                num: data
            }
        default:
            return state
    }
}
