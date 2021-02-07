import { StatusBar } from 'expo-status-bar';
import {db} from './fire';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyPage from './screens/DailyPage';
import Home from './screens/Home';
import CreateGroup from './screens/CreateGroup';
import WeeklyTracker from './screens/WeeklyTracker';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Create" component={CreateGroup} />
        <Drawer.Screen name="Daily" component={DailyPage} />
        <Drawer.Screen name="WeeklyTracker" component={WeeklyTracker} />
      </Drawer.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
});
