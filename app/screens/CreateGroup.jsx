import React, { useState } from 'react';
import { View, Alert, Modal, StyleSheet,Image, Text,TouchableOpacity, TouchableHighlight, Button, TextInput } from 'react-native';
import NativeForms from "native-forms";
import add from '../assets/add.png'

const CreateGroup = props => {
    const [name, onChangeName] = React.useState('Name');
    const [temp, onChangetemp] = React.useState('Temp');
    const [task, onChangeTask] = React.useState([]);



  return(
  <View>
    <Text style={{ fontSize:'20pt', fontWeight:'bold', padding:'20px' }}>Create A Group</Text>

    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin:'20px' }}
      onChangeText={name => onChangeName(name)}
      value={name}
    />

    {/* onChangeTask((task) => [...task, newvalue]) */}
    <View  style={{ flexDirection:'row'}}>
      <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin:'20px'  }}
          onChangeText={temp => onChangetemp(temp)}
          value={temp}
        />
        <Button title='add' style={{ height:  '10px' }} onPress={() => onChangeTask(...task,temp)} >
      
        </Button>
    </View>
        {task}                   
  </View>
  ); 
};

export default CreateGroup;