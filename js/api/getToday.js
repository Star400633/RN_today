import Axios from '../utils/Axios'
import Config from './config'

/**
 * 获取今日信息
 * @param options
 * @returns {*}
 */
export function getToday(options = {}) {
    const { name, type, path, } = Config.GET_TODAY_DATA
    options.method = type

    return fetch(path, options)
}
