import React from 'react';

import navOptions from './navOptions';
import RetencionesView from '../views/Retenciones';

const RetencionesScreen = () => <RetencionesView />;

RetencionesScreen.navigationOptions = navOptions({
  title: 'Retenciones',
  imageName: 'vencimientos',
});

export default RetencionesScreen;
