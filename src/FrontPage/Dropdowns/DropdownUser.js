import React, {Component} from 'react';
import {Menu, Dropdown, Avatar} from 'antd';
import cardIcon from '../Images/cardIcon.png';
import './DropdownStyles.css';

const {SubMenu} = Menu;

class DropdownUser extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    const menu = (
      <Menu>
        <SubMenu title="Home" popupClassName="subMenuStyles">
          <Menu.Item>
            <a
              target="_self"
              href="http://amentotech.com/htmls/worktern/index.html"
              className="dropdownLinkTag"
            >
              Home V1
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              target="_self"
              href="http://amentotech.com/htmls/worktern/indexvtwo.html"
            >
              Home V2
            </a>
          </Menu.Item>
        </SubMenu>
        <SubMenu title="Article">
          <Menu.Item>
            <a
              target="_self"
              href="http://amentotech.com/htmls/worktern/articlelist.html"
            >
              Article List
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              target="_self"
              href="http://amentotech.com/htmls/worktern/articlegrid.html"
            >
              Article Grid
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              target="_self"
              href="http://amentotech.com/htmls/worktern/articlesingle.html"
            >
              Article Single
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              target="_self"
              href="http://amentotech.com/htmls/worktern/articleclassic.html"
            >
              Article Classic
            </a>
          </Menu.Item>
        </SubMenu>
        <SubMenu title="Company">
          <Menu.Item>
            <a
              target="_self"
              href="http://amentotech.com/htmls/worktern/companygrid.html"
            >
              Company Grid
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              target="_self"
              href="http://amentotech.com/htmls/worktern/companysigle.html"
            >
              Company Single
            </a>
          </Menu.Item>
        </SubMenu>
        <Menu.Item>
          <a
            target="_self"
            href="http://amentotech.com/htmls/worktern/about.html"
          >
            About
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_self"
            href="http://amentotech.com/htmls/worktern/privacypolicy.html"
          >
            Privacy Policy
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_self"
            href="http://amentotech.com/htmls/worktern/comingsoon.html"
          >
            Coming Soon
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_self"
            href="http://amentotech.com/htmls/worktern/404page.html"
          >
            404page
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown
        overlay={menu}
        overlayClassName="topStyles"
        placement="bottomCenter"
      >
        <a className="dropdownLink" onClick={e => e.preventDefault ()}>
          <div style={{display: 'flex', padding: '7% 0 0 28%'}}>
            <div>
              <Avatar src={cardIcon} />
            </div>
            <div style={{paddingLeft: '1%'}}>
              <div>Bonu Gopal</div>
              <div style={{fontSize: '11px', textAlign: 'left'}}>
                UI Developer
              </div>
            </div>
          </div>
        </a>
      </Dropdown>
    );
  }
}
export default DropdownUser;
