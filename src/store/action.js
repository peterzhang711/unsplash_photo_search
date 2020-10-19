import {FETCH_PHOTO_FAILURE, 
        FETCH_PHOTO_REQUEST, 
		FETCH_PHOTO_SUCCESS,
		UPDATE_SEARCH_ITEM,
		UPDATE_START_PAGE,
		UPDATE_TOTAL_PAGE
	   } from './actionTypes'
import axios from 'axios'

// export const updateSearchItem = (item) => {
// 	console.log(item)
// }
export const updateSearchItem = (item) => ({type:UPDATE_SEARCH_ITEM, payload: item})
export const updateStartPage = (data) => ({type:UPDATE_START_PAGE, payload: data})
export const updateTotalPage = (data) => ({type:UPDATE_TOTAL_PAGE, payload: data})

export const fetchPhotoRequest = () => ({type: FETCH_PHOTO_REQUEST})
export const fetchPhotoSuccess = (data) => ({type: FETCH_PHOTO_SUCCESS, payload: data})
export const fetchPhotoFailure = (error) => ({type: FETCH_PHOTO_FAILURE, payload: error})

export const fetchPhotos = (searchItem='office', startPage=1,pageSize=10) => {
	// console.log("1")
	// console.log('amount1',amount,content)
	return function(dispatch) {
		// console.log("2")
		dispatch(fetchPhotoRequest())
		// console.log("3")
		// console.log('amount2',amount)
		// const amount = amount
		// console.log('amount2',amount,content)
		// axios.get('https://api.unsplash.com/search/photos?client_id=WlP4xJCNnxeEYuB6GlAANv4eoj2SYIhsdJXnW1RvRV0&page=1&per_page=4&query=office')
		axios.get(`https://api.unsplash.com/search/photos?client_id=WlP4xJCNnxeEYuB6GlAANv4eoj2SYIhsdJXnW1RvRV0&page=${startPage}&query=${searchItem}`)
		// console.log("4")
			.then(res => {
				// debugger
				console.log("res",res)
				// console.log('res.json',res.json())
				const photos = res.data
				dispatch(fetchPhotoSuccess(photos))
			})
			.catch(error => {
				// console.log(error)
				const errorMsg = error.message
				dispatch(fetchPhotoFailure(errorMsg))
			})
	}
}
