import { DrawerNavigator } from 'react-navigation';

import SaldosScreen from '../screens/Saldos';
import RetencionesScreen from '../screens/Retenciones';
import OperacionesNavigator from './OperacionesNavigator';
import EjecutivoScreen from '../screens/Ejecutivo';

const TabScreen = DrawerNavigator(
  {
    Saldos: { screen: SaldosScreen },
    Operaciones: { screen: OperacionesNavigator },
    Retenciones: { screen: RetencionesScreen },
    Ejecutivo: { screen: EjecutivoScreen },
  },
  {
    headerMode: 'screen',
    initialRouteName: 'Saldos',
    contentOptions: {
      activeTintColor: '#000',
    },
  }
);

export default TabScreen;
