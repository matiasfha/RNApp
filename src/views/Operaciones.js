import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Content, Container } from "native-base";
import { Grid, Col } from "react-native-easy-grid";

import ScreenHeader from "../components/ScreenHeader";
import DateRow from "../components/DateRow";
import DataCard from "../components/DataCard";

const OperacionesView = ({ retenciones }) => (
  <Container style={{ backgroundColor: "#fff" }}>
    <ScreenHeader />
    <Content>
      <Grid style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
        <Col>
          <DateRow />
          <DataCard
            title="En Curso"
            value={retenciones.data.curso}
            clickable
            route="OperacionesDetails"
            params={{ encurso: true }}
            currency={false}
          />
          <DataCard
            title="Vigentes"
            value={retenciones.data.vigentes}
            clickable
            route="OperacionesDetails"
            params={{ vigentes: true }}
            currency={false}
          />
        </Col>
      </Grid>
    </Content>

  </Container>
);

OperacionesView.propTypes = {
  retenciones: PropTypes.any.isRequired //eslint-disable-line
};

const mapStateToProps = state => ({
  retenciones: state.data.operaciones
});
export default connect(mapStateToProps)(OperacionesView);
