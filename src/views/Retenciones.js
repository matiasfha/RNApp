import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Content, Container } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import ScreenHeader from '../components/ScreenHeader';
import DateRow from '../components/DateRow';
import DataCard from '../components/DataCard';

const RetencionesView = ({ retenciones }) => (
  <Container style={{ backgroundColor: '#fff' }}>
    <ScreenHeader />
    <Content>
      <Grid style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
        <Col>
          <DateRow />
          <DataCard title="Disponible" value={retenciones.data.disponible} />
          <DataCard title="Transferido" value={retenciones.data.transferido} />
          <DataCard title="Utilizado" value={retenciones.data.ocupado} />
          <DataCard title="Por Liberar" value={retenciones.data.liberar} />
        </Col>
      </Grid>

    </Content>

  </Container>
);

const shape = PropTypes.shape;
const number = PropTypes.number;
RetencionesView.propTypes = {
  retenciones: shape({
    requesting: PropTypes.bool.isRequired,
    data: PropTypes.any.isRequired,
    error: number,
  }).isRequired,
};
const mapStateToProps = state => ({
  retenciones: state.data.retenciones,
});
export default connect(mapStateToProps)(RetencionesView);
