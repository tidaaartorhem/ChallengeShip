import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyTasks from './components/DailyTasks';

export default function App() {
  const [tasks, setTasks] = React.useState([
    {name: 'eat an apple', done: false}, 
    {name: 'eat a banana', done: true},
    {name: 'run 10 km', done: false},
  ]);

  const checkItem = (name) => {
    let newTasks = tasks;
    for (var i = 0; i < newTasks.length; i++) {
      if (newTasks[i].name == name) {
        newTasks[i].done = !newTasks[i].done;
      }
    }

    setTasks(newTasks);
    console.log(tasks);
  }

  useEffect(() => {
    console.log(tasks);
  })


  return (
    <View style={styles.container}>
      <DailyTasks tasks={tasks} checkItem={checkItem}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
});
