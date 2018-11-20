import { POST_SUCCESS, POST_REQUEST, POST_ERROR } from '../actions'

const InitialState = {
    res: null,
    error: null
}
const postReducer = (state = InitialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case POST_REQUEST:     
            return { 
                ...state,
                payload
            };
        case POST_SUCCESS:     
            return { 
                ...state,
                res: action.payload.data.message
            };
        case POST_ERROR:
            return { 
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default postReducer;