import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Content, Container, Text } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import ScreenHeader from '../components/ScreenHeader';
import LinkableButton from '../components/LinkableButton';

const Item = ({ title, content, url = null, type }) => (
  <Row
    style={{
      marginBottom: 15,
      borderBottomColor: '#D6D6D6',
      borderBottomWidth: 1,
      paddingBottom: 5,
    }}
  >
    <Col>
      <Row>
        <Text
          style={{
            color: '#2E5481',
            fontSize: 14,
            marginBottom: 5,
            fontWeight: 'normal',
            fontFamily: 'System',
          }}
        >
          {title}
        </Text>
      </Row>
      <Row>
        <LinkableButton content={content} url={url} type={type} />
      </Row>
    </Col>
  </Row>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  url: PropTypes.string,
  type: PropTypes.string,
};

Item.defaultProps = {
  url: null,
  type: '',
};

const EjecutivoView = (
  { nombre, telefono, direccion, email, ubicacion } // eslint-disable-line no-unused-vars
) => (
  <Container style={{ backgroundColor: '#fff' }}>
    <ScreenHeader />
    <Content style={{ marginLeft: 15, marginRight: 15 }}>
      <Grid style={{ marginTop: 20 }}>
        <Col>
          <Item title="nombre" content={nombre} />
          <Item
            title="teléfono"
            content={telefono}
            url={telefono}
            type="phone"
          />
          <Item title="email" content={email} url={email} type="email" />
          <Item
            title="email alternativo"
            content="marketing@logros.cl"
            url="marketing@logros.cl"
            type="email"
          />
          <Item
            title="dirección"
            content={direccion}
            url={`geo:${ubicacion.lat},${ubicacion.long}`}
          />

        </Col>
      </Grid>

    </Content>
  </Container>
);

EjecutivoView.propTypes = {
  nombre: PropTypes.string.isRequired,
  telefono: PropTypes.string.isRequired,
  direccion: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  ubicacion: PropTypes.shape({
    lat: PropTypes.string.isRequired,
    long: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  nombre: state.user.ejecutivo.nombre,
  direccion: state.user.ejecutivo.sucursal.direccion,
  telefono: state.user.ejecutivo.sucursal.telefono
    .split(' ')
    .join('')
    .replace('(', '')
    .replace(')', ''),
  email: state.user.ejecutivo.sucursal.email,
  ubicacion: state.user.ejecutivo.sucursal.ubicacion,
});
export default connect(mapStateToProps)(EjecutivoView);
