import React, { PropTypes } from 'react';
import { Text } from 'native-base';
import { Row, Col } from 'react-native-easy-grid';

const currencyFormatter = require('currency-formatter');

const toMoney = value =>
  currencyFormatter.format(value, {
    code: 'CLP',
    locale: 'es-CL',
    precision: 0
  });

const DataCard = ({ title, value, backgroundColor }) => (
  <Row
    style={{
      backgroundColor,
      paddingTop: 10,
      paddingLeft: 10,
      paddingBottom: 20,
      paddingRight: 10,
      borderRadius: 5,
      height: 80,
      marginTop: 10,
      alignItems: 'flex-start'
    }}
  >
    <Col style={{ width: 80, height: 67 }}>
      <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}>
        {title}
      </Text>
    </Col>
    <Col
      style={{
        height: 67,
        alignItems: 'flex-end'
      }}
    >
      <Text style={{ fontSize: 36, color: '#fff' }}>
        {toMoney(value)}
      </Text>
    </Col>
  </Row>
);

DataCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string
};

DataCard.defaultProps = {
  backgroundColor: '#2C5382'
};

export default DataCard;
