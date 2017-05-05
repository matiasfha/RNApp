import { StackNavigator } from 'react-navigation';

import SigninScreen from '../screens/Signin';
import DrawerNavigator from './DrawerNavigator';
import TabNavigator from './TabNavigator';
import LoadingScreen from '../screens/Loading';
import IndicadoresScreen from '../screens/Indicadores';

import { osComponent } from '../utils';

const AppNavigator = StackNavigator({
  Home: { screen: SigninScreen },
  Tabs: { screen: osComponent(DrawerNavigator, TabNavigator) },
  Loading: { screen: LoadingScreen },
  Indicadores: { screen: IndicadoresScreen },
});

export default AppNavigator;
