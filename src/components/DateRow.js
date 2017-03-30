import React from "react";
import { Row } from "react-native-easy-grid";
import { Text } from "native-base";

const DateRow = () => (
  <Row>
    <Text style={{ fontSize: 14, color: "#5F5F5F" }}>
      {new Date().toLocaleString("es-ES")}
    </Text>
  </Row>
);

export default DateRow;
