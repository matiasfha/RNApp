import React from 'react';
import { Icon } from 'native-base';

import navOptions from './navOptions';
import IndicadoresView from '../views/Indicadores';
import NavigateButton from '../components/NavigateButton';

const IndicadoresScreen = () => <IndicadoresView />;

IndicadoresScreen.navigationOptions = {
  ...navOptions({
    title: 'Indicadores',
  }),
  headerLeft: (
    <NavigateButton route="Home">
      <Icon
        name="arrow-back"
        style={{ color: 'white', marginLeft: 10, marginTop: 5 }}
      />
    </NavigateButton>
  ),
};

export default IndicadoresScreen;
