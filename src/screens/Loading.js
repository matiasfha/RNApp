import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Spinner } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const LoadingScreen = () => (
  <View style={styles.container}>
    <Spinner color="blue" />
    <Text>Cargando...</Text>
  </View>
);

LoadingScreen.navigationOptions = {
  title: 'Cargando',
  header: {
    left: null,
    right: null,
    style: { backgroundColor: '#2E5481' },
    titleStyle: { color: '#fff' }
  }
};

export default LoadingScreen;
