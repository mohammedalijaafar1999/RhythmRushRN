import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const BlurContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <BlurView
        style={StyleSheet.absoluteFill}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    margin: 5,
  },
});

export default BlurContainer;