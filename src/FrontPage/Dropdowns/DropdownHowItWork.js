import React, {Component} from 'react';
import {Menu, Dropdown} from 'antd';
import './DropdownStyles.css';

class DropdownMain extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    const menu = (
      <Menu style={{display: 'none'}}>
        <Menu.Item>{' '}</Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu} overlayClassName="topStyles">
        <a className="dropdownLink" onClick={e => e.preventDefault ()}>
          How It Work
        </a>
      </Dropdown>
    );
  }
}

export default DropdownMain;
