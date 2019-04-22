import Axios from '../utils/Axios'
import config from './config'
/**
 * 获取今日信息
 * @param options
 * @returns {*}
 */
export function getToday(options = {}) {
    const { name, type, path, } = config.GET_TODAY_DATA
    
    options.url = path
    options.type = type

    return Axios(options)
}
