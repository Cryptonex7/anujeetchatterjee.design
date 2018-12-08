import { SET_PAGE_VALUE, HOME, WEB, MUSIC } from "../constants";

const path = window.location.pathname;
const initialState = {
    page : path.substring(1, path.length)
}

export const changePage = (state= initialState, action={}) => {
    let h = document.getElementById("home");
    let m = document.getElementById("music");
    let w = document.getElementById("web");

    switch(action.type){
        case SET_PAGE_VALUE:
            switch(action.payload){
                case HOME: 
                    h.classList.add("nav-active");
                    m.classList.remove("nav-active");
                    w.classList.remove("nav-active");
                    break;
                
                case MUSIC:
                    m.classList.add("nav-active");
                    h.classList.remove("nav-active");
                    w.classList.remove("nav-active");
                    break;
                
                case WEB:
                    w.classList.add("nav-active");
                    m.classList.remove("nav-active");
                    h.classList.remove("nav-active");
                    break;
                default:
            }
            return Object.assign({}, state, {page: action.payload})
        default: 
            return state;
    }
}