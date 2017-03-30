import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Content, Container } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import ScreenHeader from '../components/ScreenHeader';
import DateRow from '../components/DateRow';
import DataCard from '../components/DataCard';
import Footer from '../components/Footer';
import TabIcon from '../components/TabIcon';

const SaldosScreen = ({ saldos }) => (
  <Container style={{ backgroundColor: '#fff' }}>
    <ScreenHeader />
    <Content>
      <Grid style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
        <Col>
          <DateRow />
          <DataCard title="Factoring Facturas" value={saldos.data.facturas} />
          <DataCard title="Factoring Cheques" value={saldos.data.cheques} />
          <DataCard
            title="Factoring Financiero"
            value={saldos.data.financiero}
          />
          <DataCard
            title="Total"
            value={saldos.data.total}
            backgroundColor="#6A6A6A"
          />
          <DataCard
            title="Fuera de plazo"
            value={saldos.data.plazo}
            backgroundColor="#B72020"
          />
        </Col>
      </Grid>
      <Footer />
    </Content>

  </Container>
);

SaldosScreen.navigationOptions = {
  title: 'Saldos',
  tabBar: {
    icon: (
      { tintColor } // eslint-disable-line react/prop-types
    ) => <TabIcon imageName="saldos" tintColor={tintColor} />
  }
};

const shape = PropTypes.shape;
const number = PropTypes.number;
SaldosScreen.propTypes = {
  saldos: shape({
    requesting: PropTypes.bool.isRequired,
    data: shape({
      facturas: number,
      cheques: number,
      financiero: number,
      total: number,
      plazo: number
    }).isRequired,
    error: number
  }).isRequired
};

const mapStateToProps = state => ({
  saldos: state.data.saldos
});
export default connect(mapStateToProps)(SaldosScreen);
