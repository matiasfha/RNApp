import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Content, Container } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import ScreenHeader from '../components/ScreenHeader';
import DateRow from '../components/DateRow';
import DataCard from '../components/DataCard';
import TabIcon from '../components/TabIcon';

const OperacionesScreen = ({ retenciones }) => (
  <Container style={{ backgroundColor: '#fff' }}>
    <ScreenHeader />
    <Content>
      <Grid style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
        <Col>
          <DateRow />
          <DataCard title="En Curso" value={retenciones.data.curso} />
          <DataCard title="Vigentes" value={retenciones.data.vigentes} />
        </Col>
      </Grid>
    </Content>

  </Container>
);

OperacionesScreen.navigationOptions = {
  title: 'Saldos',
  tabBar: {
    icon: (
      { tintColor } // eslint-disable-line react/prop-types
    ) => <TabIcon imageName="operaciones" tintColor={tintColor} />
  }
};

const shape = PropTypes.shape;
const number = PropTypes.number;
OperacionesScreen.propTypes = {
  retenciones: shape({
    requesting: PropTypes.bool.isRequired,
    data: shape({
      curso: number,
      vigentes: number
    }).isRequired,
    error: number
  }).isRequired
};

const mapStateToProps = state => ({
  retenciones: state.data.operaciones
});
export default connect(mapStateToProps)(OperacionesScreen);
