import ActionTypes from '../types'
import { getToday } from '../../api/getToday'

export function getTodayData() {
    return dispatch => {
    
    
        dispatch({
            type: ActionTypes.SET_TODAY_DATA,
            data: 'dsjkf',
        })
        
        
        // new Promise((resolve, reject) => {
        //     getToday().then( res => {
        //         debugger
        //         dispatch({
        //             type: ActionTypes.SET_TODAY_DATA,
        //             data: res,
        //         })
        //     })
        // })
    }
}
