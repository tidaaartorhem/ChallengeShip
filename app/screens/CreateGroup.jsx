import React, { useState } from 'react';
import { View, Alert, Modal, StyleSheet,Image, Text,TouchableOpacity, TouchableHighlight, Button, TextInput } from 'react-native';
import NativeForms from "native-forms";
import add from '../assets/add.png'
import { db } from '../fire'

const CreateGroup = props => {
    const [name, onChangeName] = React.useState('Name');
    const [temp, onChangetemp] = React.useState('Temp');
    const [tasks, onChangeTasks] = React.useState([]);


  const addTask = (task) => {
    db.collection('users').doc('1PRA4').get().then(doc => {
      var oldtasks = doc.data()["Victor"]["Tasks"];
      console.log(oldtasks);
      oldtasks.push(task);
      onChangeTasks(oldtasks)
      doc.ref.update({"Victor.Tasks": oldtasks})
    })
  }
  var showTasks = tasks.map((task, index) => (<Text key={index}>{task}</Text>))


  return(
  <View>
    <Text style={{ fontSize:'20pt', fontWeight:'bold', padding:20 }}>Create A Group</Text>

    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin:20 }}
      onChangeText={name => onChangeName(name)}
      value={name}
    />

    {/* onChangeTask((task) => [...task, newvalue]) */}
    <View  style={{ flexDirection:'row'}}>
      <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin:20  }}
          onChangeText={temp => onChangetemp(temp)}
          value={temp}
        />
        <Button title='add' style={{ height:  '10px' }} onPress={() => addTask(temp)} >
      
        </Button>
    </View>
        {showTasks}
  </View>
  ); 
};

export default CreateGroup;