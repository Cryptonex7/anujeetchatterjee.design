import { SET_PAGE_VALUE} from "../constants";

const initialState = {
    page : window.location.pathname
}

export const changePage = (state= initialState, action={}) => {
    switch(action.type){
        case SET_PAGE_VALUE:
            return Object.assign({}, state, {page: action.payload})
        default: 
            return state;
    }
}