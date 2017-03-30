import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Content, Container, Text, Button } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Linking } from 'react-native';

import TabIcon from '../components/TabIcon';

const handleClick = url => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    }
    // TODO LOG THIS SOMEWHERE console.log(`Don't know how to open URI: ${url}`);
  });
};

const RenderButton = ({ clickable, url, content }) => {
  let component;
  if (clickable && url) {
    component = (
      <Button
        full
        transparent
        onPress={handleClick(url)}
        style={{ paddingLeft: 0, marginLeft: 0 }}
      >
        <Text
          style={{
            color: '#000',
            fontSize: 18
          }}
        >
          {content}
        </Text>
      </Button>
    );
  } else {
    component = (
      <Text
        style={{
          color: '#000',
          fontSize: 18
        }}
      >
        {content}
      </Text>
    );
  }
  return component;
};

const Item = ({ title, content, clickable = false, url }) => (
  <Row
    style={{
      marginBottom: 15,
      borderBottomColor: '#D6D6D6',
      borderBottomWidth: 1,
      paddingBottom: 14
    }}
  >
    <Col>
      <Row>
        <Text style={{ color: '#2E5481', fontSize: 14, marginBottom: 5 }}>
          {title}
        </Text>
      </Row>
      <Row>
        <RenderButton clickable={clickable} content={content} url={url} />
      </Row>
    </Col>
  </Row>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  clickable: PropTypes.bool,
  url: PropTypes.string
};

Item.defaultProps = {
  clickable: false,
  url: ''
};

// TODO check how to use ubicacion and how link to call
const EjecutivoScreen = (
  { nombre, telefono, direccion, email, ubicacion } // eslint-disable-line no-unused-vars
) => (
  <Container style={{ backgroundColor: '#fff' }}>
    <Content style={{ marginLeft: 15, marginRight: 15 }}>
      <Grid style={{ marginTop: 25 }}>
        <Col>
          <Item title="Nombre" content={nombre} />
          <Item title="Telefono" content={telefono} />
          <Item title="Email" content={email} />
          <Item title="Dirección" content={direccion} />

        </Col>
      </Grid>

    </Content>
  </Container>
);

EjecutivoScreen.navigationOptions = {
  title: 'Ejecutivo',
  tabBar: {
    icon: (
      { tintColor } // eslint-disable-line react/prop-types
    ) => <TabIcon imageName="ejecutivo" tintColor={tintColor} />
  }
};

EjecutivoScreen.propTypes = {
  nombre: PropTypes.string.isRequired,
  telefono: PropTypes.string.isRequired,
  direccion: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  ubicacion: PropTypes.shape({
    lat: PropTypes.string.isRequired,
    long: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  nombre: state.user.ejecutivo.nombre,
  direccion: state.user.ejecutivo.sucursal.direccion,
  telefono: state.user.ejecutivo.sucursal.telefono,
  email: state.user.ejecutivo.sucursal.email,
  ubicacion: state.user.ejecutivo.sucursal.ubicacion
});
export default connect(mapStateToProps)(EjecutivoScreen);
