import React from "react";
import { Row } from "react-native-easy-grid";
import { Text } from "native-base";

import { getLocaleDate } from "../utils";

const DateRow = () => (
  <Row>
    <Text style={{ fontSize: 14, color: "#5F5F5F" }}>
      {getLocaleDate()}
    </Text>
  </Row>
);

export default DateRow;
