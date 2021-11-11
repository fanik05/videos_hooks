import axios from 'axios'

export default axios.create({
    baseURL: process.env.REACT_APP_YOUTUBE_API_BASE_URL,
    params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        part: 'snippet',
        type: 'video',
        maxResults: 5
    }
})