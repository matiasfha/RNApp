import React, { Component } from 'react';
import { Row } from 'react-native-easy-grid';
import { Text } from 'native-base';

import { getLocaleDate } from '../utils';

class DateRow extends Component {
  constructor(props) {
    super(props);
    this.interval = setInterval(
      () => {
        this.setState({
          minute: this.state + 1,
        });
      },
      60000
    );
  }

  state = {
    minute: 0,
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Row>
        <Text
          style={{
            fontSize: 14,
            color: '#5F5F5F',
            fontWeight: 'normal',
            fontFamily: 'System',
          }}
        >
          {getLocaleDate()}
        </Text>
      </Row>
    );
  }
}

export default DateRow;
