import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Friends from './components/Friends';

export default function App() {
  return (
    <View style={styles.container}>
      <Friends friends={[
        {progress: 0.1, initials: 'AP', name: 'Apple'},
        {progress: 0.7, initials: 'LH', name: 'Lemon'},
        {progress: 0.5, initials: 'BN', name: 'Blueberry'},
        ]}
      />
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
