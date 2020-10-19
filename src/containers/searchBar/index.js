import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPhotos, updateSearchItem, updateStartPage, updateTotalPage } from './../../store/action'

import PropTypes from 'prop-types';
import './searchBar.scss';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { Search } = Input;

function SearchBar () {
    const searchItem = useSelector(state => state.searchReducer.searchItem)
    const dispatch = useDispatch()
        // const {searchItem} = props
    const handleSearchItem = (searchItem) => {
        console.log("searchItem in app handlesearchItem function",searchItem)
        dispatch(updateSearchItem(searchItem))
        dispatch(fetchPhotos(searchItem))
        // this.props.fetchPhotos(item)
        }
        
        return (
            <div className='searchBar' data-test='searchBarCompo'>
                <Search
                data-test='searchbar'
                placeholder={searchItem}
                enterButton="Search"
                size="large"
                // onSearch={value => console.log(value)}
                onSearch={value => handleSearchItem(value)}
                />
                
            </div>
        )
    
}

export default SearchBar


