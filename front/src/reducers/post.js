const InitialState = {
    res: [],
    error: []
}
const postReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "POST_SUCCESS":     
            return { 
                ...state,
                res: action.payload
            };
        case "POST_ERROR":
            return { 
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default postReducer;