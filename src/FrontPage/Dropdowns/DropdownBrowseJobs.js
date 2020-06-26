import React, {Component} from 'react';
import {Menu, Dropdown} from 'antd';
import './DropdownStyles.css';

class DropdownBrowseJobs extends Component {
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
            href="http://amentotech.com/htmls/worktern/joblisting.html"
          >
            Job Listing
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_self"
            href="http://amentotech.com/htmls/worktern/jobsingle.html"
          >
            Job Single
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_self"
            href="http://amentotech.com/htmls/worktern/jobproposal.html"
          >
            Job Proposal
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu} overlayClassName="topStyles">
        <a className="dropdownLink" onClick={e => e.preventDefault ()}>
          Browse Jobs
        </a>
      </Dropdown>
    );
  }
}

export default DropdownBrowseJobs;
