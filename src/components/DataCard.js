import React, { PropTypes } from 'react';
import { Text } from 'native-base';
import { Row, Col } from 'react-native-easy-grid';
import { View } from 'react-native';

import NavigateButton from './NavigateButton';

const currencyFormatter = require('currency-formatter');

const toMoney = value =>
  currencyFormatter.format(value, {
    code: 'CLP',
    locale: 'es-CL',
    precision: 0
  });

const DataCard = (
  { title, value, backgroundColor, clickable = false, route, params = {} }
) => {
  const Columns = () => {
    const baseStyle = {
      paddingBottom: 20,
      paddingRight: 10,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      flex: 1
    };
    return (
      <View style={baseStyle}>
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
      </View>
    );
  };

  const Button = () => (
    <NavigateButton route={route} params={params}>
      <Columns />
    </NavigateButton>
  );

  return (
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
      {clickable ? <Button /> : <Columns />}
    </Row>
  );
};

DataCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string,
  clickable: PropTypes.bool,
  route: PropTypes.string,
  params: PropTypes.object //eslint-disable-line
};

DataCard.defaultProps = {
  backgroundColor: '#2C5382',
  clickable: false,
  route: '',
  params: {}
};

export default DataCard;
