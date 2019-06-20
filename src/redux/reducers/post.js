import axios from 'axios'

const GET_POSTS = 'GET_POSTS'
const GET_POSTS_FULFILLED = 'GET_POSTS_FULFILLED'

let initialState = {
    data: []
}

// normally you want a case for all 3 states, pending, fulfilled and rejected

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS_FULFILLED:
            return { ...state, data: action.payload.data }
        default:
            return state
    }
}

export function getPosts() {
    return {
        type: GET_POSTS,
        payload: axios.get('/api/posts')
    }
}