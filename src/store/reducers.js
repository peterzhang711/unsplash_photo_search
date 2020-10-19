import {FETCH_PHOTO_FAILURE, 
        FETCH_PHOTO_REQUEST, 
        FETCH_PHOTO_SUCCESS,
        UPDATE_SEARCH_ITEM,
        UPDATE_START_PAGE,
        UPDATE_TOTAL_PAGE
   } from './actionTypes'
import { combineReducers } from 'redux'

const initFetchState = {
    loading: false,
    photos: null,
    error: ''
}

const fetchReducer = (state = initFetchState, action) => {
    switch(action.type){
        case FETCH_PHOTO_REQUEST:
            return {...state, loading: true}
        case FETCH_PHOTO_SUCCESS:
            return {...state, photos: action.payload}
        case FETCH_PHOTO_FAILURE:
            return {...state, error: action.payload}
        default:
            return state
    }
}

const initSearchState = {
    searchItem: 'office',
    startPage: 1,
    pageSize: 10
}

 const searchReducer = (state = initSearchState, action) => {
    switch(action.type){
        case UPDATE_SEARCH_ITEM:
            return {...state, searchItem: action.payload}
        case UPDATE_START_PAGE:
            return {...state, startPage: action.payload}
        case UPDATE_TOTAL_PAGE:
            return {...state, totalPage: action.payload}
        default:
            return state
    }
}

export default combineReducers({
    fetchReducer,
    searchReducer
  })