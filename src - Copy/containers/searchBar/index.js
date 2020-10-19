import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './searchBar.scss';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { Search } = Input;

export class SearchBar extends Component {
    static propTypes = {

    }
    

    render() {
        const {handleSearchItem} = this.props
        return (
            <div className='searchBar' data-test='searchBarCompo'>
                <Search
                data-test='searchbar'
                placeholder="input search text"
                enterButton="Search"
                size="large"
                // onSearch={value => console.log(value)}
                onSearch={value => handleSearchItem(value)}
                />
            </div>
        )
    }
}

export default SearchBar


