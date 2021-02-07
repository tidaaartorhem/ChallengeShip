import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {db} from './fire';
import LoginScreen from './screens/login';
import Home from './screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import Friends from './components/Friends';





export default class App extends React.Component() {


  constructor(props){
    super(props);

    //Initialize Firebase....
    // firebase.initializeApp(fire.FirebaseConfig);

}
    
render(){
  return (
    <View style={styles.container}>
      <Home/>
      <Friends friends={[
        {progress: 0.1, initials: 'AP', name: 'Apple'},
        {progress: 0.7, initials: 'LH', name: 'Lemon'},
        {progress: 0.5, initials: 'BN', name: 'Blueberry'},
        ]}
      />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
}); 

