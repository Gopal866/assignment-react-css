import React, {Component} from 'react';
import {Button} from 'antd';
import '../Styles.css';

class ButtonComponent extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    const {buttonName} = this.props;
    return (
      <div>
        <Button type="primary" className="viewAll">
          {buttonName}
        </Button>
      </div>
    );
  }
}

export default ButtonComponent;
