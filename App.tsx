/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Background from './src/Background';

function App(): JSX.Element {
  return (

    <Background>
      <View style={styles.container}>
        <Text>Humble beginnings</Text>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'transparent',
  },
});

export default App;
