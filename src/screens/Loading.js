import React from 'react';

import navOptions from './navOptions';
import LoadingView from '../views/Loading';

const LoadingScreen = () => <LoadingView />;

LoadingScreen.navigationOptions = navOptions({ title: 'Cargando' });

export default LoadingScreen;
