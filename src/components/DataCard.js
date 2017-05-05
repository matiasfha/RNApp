import React, { PropTypes } from "react";
import { Text } from "native-base";
import { Row, Col } from "react-native-easy-grid";
import { View } from "react-native";

import NavigateButton from "./NavigateButton";
import { toMoney } from "../utils";

const Content = ({ currency = true, value, str }) => {
  //eslint-disable-line
  let text;
  if (str) {
    text = str;
  }
  if (value) {
    text = currency ? toMoney(value) : value;
  }
  return (
    <Text style={{ fontSize: 36, color: "#fff" }}>
      {text}
    </Text>
  );
};

const DataCard = (
  {
    title,
    value,
    backgroundColor,
    clickable = false,
    route,
    params = {},
    currency = true,
    str
  }
) => {
  const Columns = () => {
    const baseStyle = {
      paddingBottom: 20,
      paddingRight: 10,
      alignItems: "flex-start",
      justifyContent: "flex-start",
      flexDirection: "row",
      flex: 1
    };
    return (
      <View style={baseStyle}>
        <Col style={{ width: 80, height: 67 }}>
          <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>
            {title}
          </Text>
        </Col>
        <Col
          style={{
            height: 67,
            alignItems: "flex-end"
          }}
        >
          <Content currency={currency} value={value} str={str} />
        </Col>
      </View>
    );
  };

  const Button = () => (
    <NavigateButton route={route} params={params}>
      <Columns />
    </NavigateButton>
  );

  return (
    <Row
      style={{
        backgroundColor,
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 20,
        paddingRight: 10,
        borderRadius: 5,
        height: 80,
        marginTop: 10,
        alignItems: "flex-start"
      }}
    >
      {clickable ? <Button /> : <Columns />}
    </Row>
  );
};

DataCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number,
  backgroundColor: PropTypes.string,
  clickable: PropTypes.bool,
  route: PropTypes.string,
  params: PropTypes.object, // eslint-disable-line
  currency: PropTypes.bool,
  str: PropTypes.string
};

DataCard.defaultProps = {
  value: null,
  backgroundColor: "#2C5382",
  clickable: false,
  route: "",
  params: {},
  currency: true,
  str: null
};

export default DataCard;
