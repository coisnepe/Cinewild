const InitialState = {
    datas: [],
    error: []
}
const fetchReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":     
            return { 
                ...state,
                datas: action.payload
            };
        case "FETCH_ERROR":
            return { 
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default fetchReducer;