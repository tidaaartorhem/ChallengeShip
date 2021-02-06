import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProgressTracker from './components/ProgressTracker';

export default function App() {
  return (
    <View style={styles.container}>
      <ProgressTracker initals={'SZ'} name={'Simon'} progress={0.5}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
