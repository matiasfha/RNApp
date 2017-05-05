import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Spinner } from "native-base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export const Loader = () => (
  <View style={styles.container}>
    <Spinner color="blue" />
    <Text>Cargando...</Text>
  </View>
);

const LoadingView = () => <Loader />;

export default LoadingView;
