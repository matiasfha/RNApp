import React, { PropTypes } from 'react';
import { Text, ListItem } from 'native-base';
import { Image, View } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';

import { switchcase, toMoney } from '../utils/';

const dotRed = require('../images/dot-rechazado.png');
const dotYellow = require('../images/dot-entramite.png');
const dotGreen = require('../images/dot-aprobado.png');

const Status = ({ id }) => {
  const getState = switchcase({
    A: { icon: dotGreen, state: 'Aprobado' },
    E: { icon: dotRed, state: 'Pendiente' },
  })({ icon: dotYellow, state: 'En Trámite' });

  const { icon, state } = getState(id);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}
    >
      <Text style={{ color: '#888', fontSize: 12 }}>{state} </Text>
      <Image source={icon} style={{ marginTop: 5 }} />
    </View>
  );
};

Status.propTypes = {
  id: PropTypes.string.isRequired,
};

const OperacionesItem = ({ value, operacion, date, sucursal, status }) => (
  <ListItem>
    <Col>
      <Row style={{ justifyContent: 'space-between' }}>
        <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>
          {toMoney(value)}
        </Text>
        {status && <Status id={status} />}
      </Row>
      <Row>
        <Text style={{ color: '#000', fontSize: 14 }}>
          Operación Nº {operacion}
        </Text>
      </Row>
      <Row>
        <Text style={{ color: '#5F5F5F', fontSize: 14 }}>
          {date}, sucursal {sucursal}
        </Text>
      </Row>
    </Col>
  </ListItem>
);

OperacionesItem.propTypes = {
  value: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  operacion: PropTypes.number.isRequired,
  sucursal: PropTypes.string.isRequired,
  status: PropTypes.string,
};

OperacionesItem.defaultProps = {
  status: null,
};

export default OperacionesItem;
