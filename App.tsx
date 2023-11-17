/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Background from './src/Background';
import BlurContainer from './src/Components/BlurContainer';

function App(): JSX.Element {
  return (
    <Background>
      <ScrollView>
        <View style={styles.container}>
          <Text>Humble beginnings</Text>
          <BlurContainer>
            <Text>Blur</Text>
          </BlurContainer>
        </View>
      </ScrollView>
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
