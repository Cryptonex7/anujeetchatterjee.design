import { SET_PAGE_VALUE } from '../constants';

export const setPage = (page) => ({
    type: SET_PAGE_VALUE,
    payload: page
})