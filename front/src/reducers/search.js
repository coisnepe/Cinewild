import * as actionTypes from '../helpers/actionTypes';

const InitialState = {search : ''}
const searchReducer= (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_MOVIE:
            console.log('dans le switch', state);            
            return { 
                ...state,
                search: action.search
            };
        default:
            console.log('hors du switch',state);
            return state;
    }
}
export default searchReducer;