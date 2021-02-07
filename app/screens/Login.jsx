import React, { useState } from 'react';
import { View, Alert, Modal, StyleSheet, Text, TouchableHighlight, Button, TextInput } from 'react-native';
import {db} from '../fire';



const LoginScreen = props => {
    const [code, changeCode] = useState(0);
    const [showModal, setShowModal] = useState(false);
  const show = () => showForm(true);
  const hide = () => showForm(false);
    const createGame = () => {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        changeCode(text);

            db.ref('users/' + code).set({
              Name:'Check'
            });
          
     }

     const joinGame = () => {
        setShowModal(old => !old);
    }
   
    return(
        <View>
   {showModal?
          
            <TextInput placeholder="Enter code here"/> :
            <View>
                   
                  <Text style={ {fontSize: 20,
                fontWeight: "bold", textAlign:"center", padding:'10px'}} > Welcome  </Text>
                 <Text style={ {fontSize: 20,
                fontWeight: "bold", textAlign:"center",
                flexDirection: 'row', textAlign:"center", padding:'10px'}} > To  </Text>
                  <Text style={ {fontSize: 20,
                fontWeight: "bold",
                flexDirection: 'row', textAlign:"center", padding:'10px'}} > Goalwise </Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                
                </View> 
      
         
               
     
        <Button
                        title="Create a Group"
                        onPress={() => createGame()}
                    /> 


               
            
                <Text style={{flex: 1, flexDirection: 'row', textAlign:"center"}}> OR </Text>
         
                <Button
                    title="Join a Group"
                    onPress={() => joinGame()}
                />
             </View>
            } </View>
     
    );
};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  

export default LoginScreen;