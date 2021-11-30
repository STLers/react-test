import axios from 'axios'

const BASE = ''
export default function ajax(url, data = {}, type = 'GET') {
    return new Promise((resolve, reject) => {
        let promise
        if (type === 'GET') {
            promise = axios.get(BASE + url, {
                params: data
            })
        } else {
            promise = axios.post(BASE + url, data)
        }
        promise.then(resolve).catch(error => {console.error(error);})
    })
}