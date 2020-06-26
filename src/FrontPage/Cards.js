import React, {Component} from 'react';
import {Card, Row, Col} from 'antd';
import './Styles.css';

class Cards extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <Row>
          <Col span={5}>
            <Card className="CardStyle">
              <Card.Grid className="gridStyle">
                <div className="container">
                  <div className="image">Mobiles</div>
                  <div className="overlay">
                    <div className="text">
                      <h2>Mobiles</h2>
                      <div>
                        Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Grid>
            </Card>
          </Col>
          <Col span={5} offset={1}>
            <Card className="CardStyle">
              <Card.Grid className="gridStyle">
                <div className="arrow">
                  <div>Mobiles</div>
                </div>
              </Card.Grid>
            </Card>
          </Col>
          <Col span={5} offset={1}>
            <Card className="CardStyle">
              <Card.Grid className="gridStyle">Content</Card.Grid>
            </Card>
          </Col>
          <Col span={5} offset={1}>
            <Card className="CardStyle">
              <Card.Grid className="gridStyle">Content</Card.Grid>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={5}>
            <Card className="CardStyle">
              <Card.Grid className="gridStyle">Content</Card.Grid>
            </Card>
          </Col>
          <Col span={5} offset={1}>
            <Card className="CardStyle">
              <Card.Grid className="gridStyle">Content</Card.Grid>
            </Card>
          </Col>
          <Col span={5} offset={1}>
            <Card className="CardStyle">
              <Card.Grid className="gridStyle">Content</Card.Grid>
            </Card>
          </Col>
          <Col span={5} offset={1}>
            <Card className="CardStyle">
              <Card.Grid className="gridStyle">Content</Card.Grid>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Cards;
