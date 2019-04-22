import ActionType from '../../actions/types'
const defaultState = {}

export default function Today(state=defaultState, action) {
    switch(action.type) {
        case ActionType.GET_TODAY_DATA:
            return {
                ...state,
                newData: new Date().getTime()
            }
            
        default:
            return state
    }
}
