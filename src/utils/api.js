import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

export const fetchDataFromApi = async (url, body, method) => {
    const {data} = await axios({
        method: method,
        url: BASE_URL + url,
        data: body
    })

    if(data.success) {
        return data.data
    }
    else {
        return Error(data.message)
    }
}