import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './searchCount.scss'
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button } from 'antd';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          10
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          20
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          30
        </a>
      </Menu.Item>
    </Menu>
  );

export class SearchCount extends Component {
    static propTypes = {

    }
    
    render() {
        return (
            <div className='searchCount'>
                <Dropdown overlay={menu} placement="bottomCenter" arrow>
                    <Button>Page Number Start from</Button>
                </Dropdown>
                <Dropdown className='butPgNum' overlay={menu} placement="bottomCenter" arrow>
                    <Button>Page Number Will Show</Button>
                </Dropdown>
            </div>
        )
    }
}

export default SearchCount
