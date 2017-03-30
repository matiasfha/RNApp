import React, { PropTypes } from "react";
import { StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: null,
    height: null
  }
});

const BackgroundImage = ({ source, children }) => (
  <Image source={source} style={styles.backgroundImage}>
    {children}
  </Image>
);

BackgroundImage.propTypes = {
  source: PropTypes.any.isRequired, //eslint-disable-line
  children: PropTypes.node.isRequired
};

export default BackgroundImage;
