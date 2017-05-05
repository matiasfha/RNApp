import React, { PropTypes } from 'react';
import { Image } from 'react-native';

const ejecutivo = require('../images/tabbar/ejecutivo.png');
const excedentes = require('../images/tabbar/excedentes.png');
const operaciones = require('../images/tabbar/operaciones.png');
const saldos = require('../images/tabbar/saldos.png');
const vencimientos = require('../images/tabbar/vencimientos.png');

const TabIcon = ({ imageName, tintColor }) => {
  let icon;
  switch (imageName) {
    case 'ejecutivo':
      icon = ejecutivo;
      break;
    case 'execedentes':
      icon = excedentes;
      break;
    case 'operaciones':
      icon = operaciones;
      break;
    case 'vencimientos':
      icon = vencimientos;
      break;
    default:
      icon = saldos;
      break;
  }
  return <Image source={icon} style={{ width: 26, height: 26, tintColor }} />;
};

TabIcon.propTypes = {
  imageName: PropTypes.string.isRequired,
  tintColor: PropTypes.string.isRequired,
};
export default TabIcon;
