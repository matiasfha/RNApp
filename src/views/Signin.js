import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, Image, StyleSheet, Linking, Alert } from 'react-native';
import { Container, Content, Icon, Button } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import Hyperlink from 'react-native-hyperlink';

import BackgroundImage from '../components/BackgroundImage';
import SigninForm from '../components/SigninForm';
import { navigate, doLogin } from '../redux/actions';
import { loginReset } from '../redux/actions/login';

const bgImage = require('../images/fondo-logros.png');

const styles = StyleSheet.create({
  titleImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});

const titleImg = require('../images/title.png');
const indicadores = require('../images/indicadores.png');

let alertShown = false;

class SigninView extends React.Component {
  componentDidMount() {
    /* this.handleSubmit({
      rut: 'PrU3BA-1',
      password: 'CL@v3-1'
    });*/
    this.props.dispatch(loginReset());
    alertShown = false;
  }

  componentDidUpdate(nextProps) {
    const { error } = nextProps;
    if (error > 0) {
      let text = 'Ha ocurrido un error inesperado. Intente nuevamente o contacte a soporte';
      if (error === 401) {
        text = 'Usuario o contraseña incorrectos';
      }
      if (error === 404) {
        text = 'Debe ingresar usuario y contraseña';
      }
      if (!alertShown) {
        Alert.alert('Error', text, [{ text: 'OK' }], { cancellable: true });
        alertShown = true;
      }
    }
  }

  handleSubmit = ({ rut, password }) =>
    this.props.dispatch(doLogin({ rut, password }));

  render() {
    const { requesting, dispatch } = this.props;

    return (
      <BackgroundImage source={bgImage}>
        <Container>
          <Content>
            <Grid>
              <Row style={styles.titleImage}>
                <Image source={titleImg} style={{ width: 270, height: 24 }} />
              </Row>

              <SigninForm
                handleSubmit={this.handleSubmit}
                submitting={requesting}
              />
              <Button
                block
                full
                iconRight
                bordered={false}
                style={{
                  backgroundColor: 'white',
                  marginTop: 40,
                  justifyContent: 'space-between',
                }}
                onPress={() =>
                  Linking.openURL('https://logros.cl/contacto-factoring/')}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'normal',
                    fontFamily: 'System',
                    color: '#B72020',
                  }}
                >
                  {' '}Aún no soy cliente{' '}
                </Text>
                <Icon name="arrow-forward" style={{ color: '#95989A' }} />
              </Button>

              <Hyperlink
                linkStyle={{ color: '#2980b9' }}
                linkText={url =>
                  url === 'https://logros.cl/contacto-factoring/'
                    ? 'sitio web'
                    : url}
              >
                <Text
                  style={{
                    marginTop: 18,
                    marginLeft: 18,
                    marginRight: 18,
                    color: '#646464',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontFamily: 'System',
                  }}
                >
                  Si aún no es cliente de Logros Factoring envíenos un mensaje en nuestro https://logros.cl/contacto-factoring/  y lo contactaremos a la brevedad para que conozca todas las alternativas de financiamiento que tenemos para su empresa.
                </Text>
              </Hyperlink>

              <Button
                block
                full
                iconRight
                iconLeft
                bordered={false}
                style={{
                  backgroundColor: 'white',
                  marginTop: 55,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                }}
                onPress={() => dispatch(navigate('Indicadores'))}
              >
                <Image source={indicadores} />
                <Text
                  style={{
                    color: '#000',
                    fontSize: 17,
                    fontWeight: 'normal',
                    fontFamily: 'System',
                    textAlign: 'left',
                    flex: 1,
                    paddingRight: 100,
                  }}
                >
                  {' '}Indicadores económicos{' '}
                </Text>
                <Icon
                  name="arrow-forward"
                  style={{ color: '#95989A', alignSelf: 'flex-end' }}
                />
              </Button>

            </Grid>
          </Content>
        </Container>
      </BackgroundImage>
    );
  }
}

SigninView.propTypes = {
  requesting: PropTypes.bool.isRequired,
  error: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  requesting: state.user.requesting,
  error: state.user.error,
});
export default connect(mapStateToProps)(SigninView);
