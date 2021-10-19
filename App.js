import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './src/components/header';
import Home from './src/components/home';

const App = () => {
  return (
    <SafeAreaView id="App" style={styles.app}>
      <Header />
      <Home />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  app: {
    fontFamily: 'MarvelRegular',
    fontSize: 32,
    backgroundColor: '#151515',
    flex: 1,
  },
});

export default App;
