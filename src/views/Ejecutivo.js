import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Content, Container, Text } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import LinkableButton from '../components/LinkableButton';

const Item = ({ title, content, url = null }) => (
  <Row
    style={{
      marginBottom: 15,
      borderBottomColor: '#D6D6D6',
      borderBottomWidth: 1,
      paddingBottom: 14,
    }}
  >
    <Col>
      <Row>
        <Text style={{ color: '#2E5481', fontSize: 14, marginBottom: 5 }}>
          {title}
        </Text>
      </Row>
      <Row>
        <LinkableButton content={content} url={url} />
      </Row>
    </Col>
  </Row>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  url: PropTypes.string,
};

Item.defaultProps = {
  url: null,
};

const EjecutivoView = (
  { nombre, telefono, direccion, email, ubicacion } // eslint-disable-line no-unused-vars
) => (
  <Container style={{ backgroundColor: '#fff' }}>
    <Content style={{ marginLeft: 15, marginRight: 15 }}>
      <Grid style={{ marginTop: 25 }}>
        <Col>
          <Item title="Nombre" content={nombre} />
          <Item title="Telefono" content={telefono} url={`tel:${telefono}`} />
          <Item title="Email" content={email} url={`mailto:${email}`} />
          <Item
            title="Email Alternativo"
            content="marketing@logros.cl"
            url="mailto:marketing@logros.cl"
          />
          <Item
            title="Dirección"
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
