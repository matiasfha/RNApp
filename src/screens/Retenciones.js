import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Content, Container } from "native-base";
import { Grid, Col } from "react-native-easy-grid";

import ScreenHeader from "../components/ScreenHeader";
import DateRow from "../components/DateRow";
import DataCard from "../components/DataCard";
import TabIcon from "../components/TabIcon";

const RetencionesScreen = ({ retenciones }) => (
  <Container style={{ backgroundColor: "#fff" }}>
    <ScreenHeader />
    <Content>
      <Grid style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
        <Col>
          <DateRow />
          <DataCard title="Disponible" value={retenciones.data.disponible} />
          <DataCard title="Transferido" value={retenciones.data.transferido} />
          <DataCard title="Ocupado" value={retenciones.data.ocupado} />
          <DataCard title="Liberar" value={retenciones.data.liberar} />
        </Col>
      </Grid>

    </Content>

  </Container>
);

RetencionesScreen.navigationOptions = {
  title: "Retenciones",
  tabBar: {
    icon: ({ tintColor }) => (
      <TabIcon imageName="vencimientos" tintColor={tintColor} />
    )
  }
};

const shape = PropTypes.shape;
const number = PropTypes.number;
RetencionesScreen.propTypes = {
  retenciones: shape({
    requesting: PropTypes.bool.isRequired,
    data: shape({
      disponible: number,
      transferido: number,
      ocupado: number,
      liberar: number
    }).isRequired,
    error: number
  }).isRequired
};
const mapStateToProps = state => ({
  retenciones: state.data.retenciones
});
export default connect(mapStateToProps)(RetencionesScreen);
