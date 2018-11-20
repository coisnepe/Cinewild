import { FETCH_SUCCESS, FETCH_REQUEST, FETCH_ERROR } from '../actions'

const InitialState = {
    loading : false,
    moviesList: [],
    error: []
}
const fetchReducer = (state = InitialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:     
            return { 
                ...state,
                loading: true
            };
        case FETCH_SUCCESS:     
            return { 
                ...state,
                loading: false,
                moviesList: action.payload.data
            };
        case FETCH_ERROR:
            return { 
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export default fetchReducer;