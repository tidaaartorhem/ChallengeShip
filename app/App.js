import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase'
import fire from './fire'
import WeeklyTracker from './screens/WeeklyProgress'

const App = () => {
  useEffect(() => {
    if(!firebase.apps.length){firebase.initializeApp(fire.FirebaseConfig)};
  }, [])
  return (
    <WeeklyTracker></WeeklyTracker>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}
export default App;

// export default class App extends React.Component() {

// //   constructor(props){
// //     super(props);

// //     //Initialize Firebase....
// //     if(!firebase.apps.length){firebase.initializeApp(fire.FirebaseConfig);}

// // }
    
// render(){
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
}); 

