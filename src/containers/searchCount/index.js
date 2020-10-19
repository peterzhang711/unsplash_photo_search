import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPhotos, updateSearchItem, updateStartPage, updateTotalPage } from './../../store/action'
import './searchCount.scss'
import 'antd/dist/antd.css';
import { Pagination } from 'antd';


function SearchCount ({totalPage}) {
  const startPage = useSelector(state => state.searchReducer.startPage)
  const pageSize = useSelector(state => state.searchReducer.totalPage)
  const dispatch = useDispatch()
  const handleSearchCount = (startPage,pageSize) => {
    console.log("search page and pagesize in searchcount",startPage,pageSize)
    dispatch(updateStartPage(startPage))
    dispatch(fetchPhotos(startPage))
    // this.props.fetchPhotos(item)
    }
      console.log(totalPage)
        return (
            <div className='searchCount'>
           <Pagination
              total={totalPage}
              showQuickJumper
              showSizeChanger
              showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
              defaultPageSize={10}
              defaultCurrent={1}
              onChange={(startPage, pageSize)=>handleSearchCount(startPage, pageSize)}
            />
            </div>
        )
}

export default SearchCount
