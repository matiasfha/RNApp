import React from 'react';

import navOptions from './navOptions';
import SigninView from '../views/Signin';

const SigninScreen = () => <SigninView />;

SigninScreen.navigationOptions = {
  ...navOptions({
    title: 'Iniciar Sesión',
    headerMenu: false,
  }),
  headerRight: null,
};

export default SigninScreen;
