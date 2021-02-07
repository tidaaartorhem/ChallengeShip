import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {db} from './fire';
import LoginScreen from './screens/login';
import Home from './screens/Home'
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component {

  constructor(props){
    super(props);

    //Initialize Firebase....
    // firebase.initializeApp(fire.FirebaseConfig);

}
    
render(){
  return (
    <View style={styles.container}>
      <Home/>
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

