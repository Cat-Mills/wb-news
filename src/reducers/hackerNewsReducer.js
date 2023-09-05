import axios from 'axios'



let PENDING =  'PENDING'
let REQUEST_ARTICLES = 'REQUEST_ARTICLES'

let initialState = {
    loading: false, 
    articles: []
}

export const requestArticles = async (dispatch) => {
    dispatch({type: PENDING})
    let articles = await axios.get('/api/hacker-news').then(res => res.data)
    dispatch({type: REQUEST_ARTICLES, payload: articles})
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PENDING: 
            return { ...state, loading: true}
        case REQUEST_ARTICLES:
            return { loading: false, articles: action.payload}
        default:
            return state
    }
}