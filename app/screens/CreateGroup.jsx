import React, { useState } from 'react';
import { FlatList, View, Alert, Modal, StyleSheet,Image, Text,TouchableOpacity, TouchableHighlight, Button, TextInput } from 'react-native';
import {db} from '../fire'
import add from '../assets/add.png'

const CreateGroup = props => {
    const [name, onChangeName] = React.useState('');
    const [temp, onChangetemp] = React.useState('');
    const [task, onChangeTask] = React.useState([]);
    const [penalty, onChangePenalty] = React.useState([]);
    const [penaltytemp, onChangepenaltytemp] = React.useState('');

// const writeUserData = (penalty, tasks) => {
//     var path = 'users/1PRA4/Friends/Victor'

//     db.ref(path + '/Penalty').once('value', function(snapshot) {
//         snapshot.forEach(function(childSnapshot) {
//           console.log(childSnapshot.val());
//           penalty.push(childSnapshot.val());
//         });
//     });

//     console.log(penalty);

//     update(penalty, tasks);
// }

const writeUserData = (penalty, tasks, progress) => {
    const newVictor = {'Penalty': penalty, 'Tasks': tasks, 'Progress': progress}

    db.collection('users').doc('1PRA4').update({
        Victor: newVictor
    })

}

// function writeUserData(penalty, task) {
//     // A post entry.
//     var postData = {
//       Penalty: penalty,
//       Task: task
//     };
  
//     // Get a key for a new Post.
//     var newPostKey = db.ref().child('users').push().key;
  
//     // Write the new post's data simultaneously in the posts list and the user's post list.
//     var updates = {};
//     updates['/1PRA4/Friends/Victor/Penalty' + newPostKey] = postData;
  
//     return db.ref().update(updates);
//   }



return(
<View>
    <Text style={{ fontSize:'20pt', fontWeight:'bold', padding:'20px' }}>Create A Goal</Text>

    <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin:'20px' }}
        onChangeText={name => onChangeName(name)}
        value={name}
        placeholder="Name"
    />

    <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin:'20px'  }}
        onChangeText={temp => onChangetemp(temp)}
        value={temp}
        placeholder="Temp"
    />

    <Button 
        title='add'
        style={{ height:  '10px' }}  
        onPress={() => {
            onChangeTask([...task, temp])
        }} 
    />
    <View style={styles.container}>
        <FlatList
            data={task}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        />
    </View>
    
    
    <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin:'20px'  }}
        onChangeText={penaltytemp => onChangepenaltytemp(penaltytemp)}
        value={penaltytemp}
        placeholder="Penalty"
    />

    <Button 
        title='add'
        style={{ height:  '10px' }}  
        onPress={() => {
            console.log(penalty)
            onChangePenalty([...penalty, penaltytemp])
        }}
    />

    <View style={styles.container}>
        <FlatList
            data={penalty}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        />
    </View>


    <Button
        title="Confirm"
        style={{height: '10px'}}
        onPress={() => {
            console.log("Confirm")
            // var newPenalty = []
            // var newTask = []
            // var newProgress = []

            // db.collection('users').onSnapshot(snapshot => {
            //     snapshot.forEach(doc => {
            //         newPenalty = doc.data()["Victor"]["Penalty"]
            //         newTask = doc.data()["Victor"]["Tasks"]
            //         newProgress = doc.data()["Victor"]["Progress"]
            //     })
            // })

            // newPenalty.push.apply(newPenalty, penalty)

            writeUserData(penalty, task, [])
        }}
    />          
</View>

);
};

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

export default CreateGroup;
