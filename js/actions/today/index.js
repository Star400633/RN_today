import ActionTypes from '../types'
import { getToday } from '../../api/getToday'

export function getTodayData() {
    return async dispatch => {
        
        const result = await getToday().then( res => {
            return res.json()
        }).catch( err => {
            console.log('err', err)
        })
        
        const { code, data } = result
        if( code === 1 ) {
            dispatch({
                type: ActionTypes.SET_TODAY_DATA,
                payload: data,
            })
        } else {
            console.log('错误的业务码~')
        }
    }
}
