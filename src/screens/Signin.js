import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import BackgroundImage from '../components/BackgroundImage';
import SigninForm from '../components/SigninForm';
import { doLogin } from '../redux/actions';

const bgImage = require('../images/fondo-logros.png');

const Err = ({ status }) => {
  if (status === 401) {
    return <Text>Rut o contraseña no validos </Text>;
  }
  return <Text>Ha ocurrido un error intenta nuevamente </Text>;
};
Err.propTypes = {
  status: PropTypes.number.isRequired
};

class SigninScreen extends React.Component {
  componentDidMount() {
    this.handleSubmit({
      rut: 'PrU3BA-1',
      password: 'CL@v3-1'
    });
  }

  handleSubmit = ({ rut, password }) =>
    this.props.dispatch(doLogin({ rut, password }));

  render() {
    const { requesting, error } = this.props;
    return (
      <BackgroundImage source={bgImage}>
        {error > 0 && Err(error)}
        <SigninForm handleSubmit={this.handleSubmit} submitting={requesting} />
      </BackgroundImage>
    );
  }
}

SigninScreen.propTypes = {
  requesting: PropTypes.bool.isRequired,
  error: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

SigninScreen.navigationOptions = {
  title: 'Iniciar Sesión',
  header: {
    left: null,
    right: null,
    style: { backgroundColor: '#2E5481' },
    titleStyle: { color: '#fff' }
  }
};

const mapStateToProps = state => ({
  requesting: state.user.requesting,
  error: state.user.error
});
export default connect(mapStateToProps)(SigninScreen);
