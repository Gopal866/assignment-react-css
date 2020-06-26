import React, {Component} from 'react';
import {Row, Col, Select, Input} from 'antd';
import {PlayCircleFilled} from '@ant-design/icons';
import DropdownMain from './Dropdowns/DropdownMain';
import DropdownHowItWork from './Dropdowns/DropdownHowItWork';
import DropdownBrowseJobs from './Dropdowns/DropdownBrowseJobs';
import DropdownViewFreelancers from './Dropdowns/DropdownViewFreelancers';
import DropdownUser from './Dropdowns/DropdownUser';
import ButtonComponent from './Components/ButtonComponent';
import Cards from './Cards';
import worktern from './Images/worktern.jpg';
import leftSuite from './Images/leftSuite.png';
import rightSuite from './Images/rightSuite.png';
import mobile from './Images/mobile.png';
import googleplay from './Images/googleplay.png';
import appStore from './Images/appStore.png';
import banner from './Images/banner.jpg';
import './Styles.css';

const {Option} = Select;
const {Search} = Input;

class HomePage extends Component {
  constructor (props) {
    super (props);
    this.state = {
      callAnchorTag: '',
    };
  }

  clickAnchor = () => {
    document.getElementById ('searchAnchorId');
    this.setState ({callAnchorTag: ''});
  };

  render () {
    const searchSuffix = (
      <Select defaultValue="Freelancers" className="searchSuffix">
        <Option value="Freelancers">Freelancers</Option>
        <Option value="Jobs">Jobs</Option>
        <Option value="Companies">Companies</Option>
      </Select>
    );

    return (
      <div>
        <Row className="header">
          <Col span={8}>
            <div className="worktern">
              <a
                target="_self"
                href="http://amentotech.com/htmls/worktern/index.html"
                id="searchAnchorId"
              >
                <img src={worktern} height="28px" alt="Worktern" />
              </a>
            </div>
          </Col>
          <Col span={16}>
            <Row style={{textAlign: 'right'}}>
              <Col span={4}><div><DropdownMain /></div></Col>
              <Col span={5}><div><DropdownHowItWork /></div></Col>
              <Col span={5}><div><DropdownBrowseJobs /></div></Col>
              <Col span={5}><div><DropdownViewFreelancers /></div></Col>
              <Col span={5}>
                <div><DropdownUser /></div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <div>
            <div>
              <img src={banner} height="575px" width="100%" alt="Banner" />
              <div className="centered">
                <div className="displayFlex">
                  <div className="leftSidePart">
                    <div className="outerCircle">
                      <div className="innerCircle">999999</div>
                    </div>
                  </div>
                  <div className="rightSidePart">
                    <div className="freeLancerData">
                      <div>Hire expert freelancers</div>
                      <div className="jobOnline">for any job, Online</div>
                    </div>
                    <div className="jobOnlineSubData">
                      Consectetur adipisicing elit sed dotem eiusmod tempor incuntes ut
                      labore etdolore maigna aliqua enim.
                    </div>
                    <div>
                      <div>
                        <Search
                          size="large"
                          placeholder="I'm looking for"
                          onSearch={value => this.clickAnchor ()}
                          enterButton
                          suffix={searchSuffix}
                          style={{width: '500px'}}
                        />
                        <a
                          target="_self"
                          href="http://amentotech.com/htmls/worktern/userlisting.html"
                          id="searchAnchorId"
                        />
                        <div style={{marginTop: '3%', display: 'flex'}}>
                          <div>
                            <a
                              target="_self"
                              href="http://amentotech.com/htmls/worktern/userlisting.html"
                              id="searchAnchorId"
                            >
                              <PlayCircleFilled className="playIcon" />
                            </a>
                          </div>
                          <div className="playIconData">
                            <div>See For Yourself!</div>
                            <div>
                              How it works & experience the ultimate joy.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div className="marginStyles">
            <div className="exploreCategories">Explore Categories</div>
            <div className="professionalByCategories">
              Professional by categories
              <hr className="redBorder" />
            </div>
          </div>
        </Row>
        <Row><div><Cards /></div></Row>
        <br />
        <br />
        <Row>
          <Col>
            <div style={{textAlign: 'center'}}>
              <ButtonComponent buttonName="VIEW ALL" />
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col>
            <div className="displayFlex">
              <div className="leftCard">
                <div className="leftCardInnerLeft">
                  <img
                    src={leftSuite}
                    alt="LeftSuite"
                    className="rightCardInnerImage"
                  />
                </div>
                <div className="leftCardInnerRight">
                  <div className="cardTitle">Start As Company</div>
                  <div className="cardData">
                    Consectetur adipisicing elit sed dotem eiusmod tempor incune utnaem
                    {' '}
                    labore etdolore maigna aliqua enim poskina ilukita ylokem lokateise
                    {' '}
                    ination voluptate velit esse cillum.
                  </div>
                  <div className="colorGreen">
                    <ButtonComponent buttonName="JOIN NOW" />
                  </div>
                </div>
              </div>
              <div className="rightCard">
                <div className="leftCardInnerRight">
                  <div className="cardTitle">Start As Freelancer</div>
                  <div className="cardData">
                    Consectetur adipisicing elit sed dotem eiusmod tempor incune utnaem
                    {' '}
                    labore etdolore maigna aliqua enim poskina ilukita ylokem lokateise
                    {' '}
                    ination voluptate velit esse cillum.
                  </div>
                  <div className="colorGreen">
                    <ButtonComponent buttonName="JOIN NOW" />
                  </div>
                </div>
                <div className="leftCardInnerLeft">
                  <img
                    src={rightSuite}
                    alt="RightSuite"
                    className="rightCardInnerImage"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col>
            <div className="displayFlex">
              <div className="leftMobile">
                <img src={mobile} alt="Mobile" />
              </div>
              <div className="rightMobileData">
                <div className="limitLessTitle">Limitless Experience</div>
                <div className="roamData">Roam Around With Your Business</div>
                <hr className="redBorder1" />
                <br />
                <br />
                <br />
                <div className="description">
                  Dotem eiusmod tempor incune utnaem labore etdolore maigna aliqua enim poskina
                  ilukita ylokem lokateise ination voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur lokaim urianewce.
                  <br />
                  <br />
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborumed perspiciatis.
                </div>
                <br />
                <br />
                <div className="displayFlex">
                  <div>
                    <img src={googleplay} alt="Googleplay" />
                  </div>
                  &emsp;&emsp;
                  <div>
                    <img src={appStore} alt="AppStore" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default HomePage;
