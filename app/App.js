import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyPage from './screens/DailyPage';

export default function App() {
  return (
    <View style={styles.container}>
      <DailyPage title="Fitness" initials='AB'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
});
