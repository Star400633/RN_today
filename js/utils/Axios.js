// 对请求的封装 所有的api请求都经过此处
import axios from 'axios'

// 请求拦截
axios.interceptors.request.use((options={}) => {
    let { params } = options
    const { url, type, data, contentType='application/x-www-form-urlencoded', withCredentials=true, headers } = options
    params = {
        ...params,
        t: new Date().getTime()
    }
    
    const config = {
        url,
        methods: type,
        params,
        data,
        contentType,
        withCredentials,
        headers,
    }
    
    if(type === 'POST') {
        if(options.postType === 'formData') {
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
            config.transformRequest = [function(data) {
                let newData = ''
                for(const key in data) {
                    newData += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`
                }
                return newData
            }]
        } else if(options.postType === 'multipleFormData') {
            config.headers['Content-Type'] = 'multiple/form-data'
        } else {
            config.headers['Content-Type'] = 'application/json;charset=utf-8;'
            config.data = JSON.stringify(data)
        }
    }
    return config
}, err => {
    console.log('req err', err)
    return Promise.reject(err)
})

// 相应拦截
axios.interceptors.response.use((res) => {
    console.log('res err', res)
    if(res.status === 200) {
        return JSON.parse(res.data)
    }
    return res.data
}, err => {
    return Promise.reject(err)
})

export default axios
