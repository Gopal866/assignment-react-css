import React, {Component} from 'react';
import {Menu, Dropdown} from 'antd';
import './DropdownStyles.css';

class DropdownViewFreelancers extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target="_self"
            href="http://amentotech.com/htmls/worktern/userlisting.html"
          >
            User Listing
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_self"
            href="http://amentotech.com/htmls/worktern/usersingle.html"
          >
            User Single
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu} overlayClassName="topStyles">
        <a className="dropdownLink" onClick={e => e.preventDefault ()}>
          View Freelancers
        </a>
      </Dropdown>
    );
  }
}

export default DropdownViewFreelancers;
