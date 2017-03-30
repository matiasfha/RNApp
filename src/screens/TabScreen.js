import { TabNavigator } from 'react-navigation';

import SaldosScreen from './Saldos';
import RetencionesScreen from './Retenciones';
import OperacionesScreen from './Operaciones';
import EjecutivoScreen from './Ejecutivo';

const TabScreen = TabNavigator(
  {
    Saldos: { screen: SaldosScreen },
    Operaciones: { screen: OperacionesScreen },
    Retenciones: { screen: RetencionesScreen },
    Ejecutivo: { screen: EjecutivoScreen }
  },
  {
    navigationOptions: {
      header: {
        left: null,
        right: null,
        style: { backgroundColor: '#2E5481' },
        titleStyle: { color: '#fff' }
      }
    }
  }
);

export default TabScreen;
