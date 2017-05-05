import { TabNavigator } from 'react-navigation';

import SaldosScreen from '../screens/Saldos';
import RetencionesScreen from '../screens/Retenciones';
import OperacionesNavigator from './OperacionesNavigator';
import EjecutivoScreen from '../screens/Ejecutivo';

const TabScreen = TabNavigator({
  Saldos: { screen: SaldosScreen },
  Operaciones: { screen: OperacionesNavigator },
  Retenciones: { screen: RetencionesScreen },
  Ejecutivo: { screen: EjecutivoScreen }
});

export default TabScreen;
