import React, { useState } from 'react';
import { View, Alert, Modal, StyleSheet, Text, TouchableHighlight, Button, TextInput } from 'react-native';
import CreateGroup from './CreateGroup'
import LoginScreen from './Login';


const Home = props => {

    const [loggedIn, setLoggedIn] = useState(false);

    return(
       
      <View>
          <CreateGroup/>
          Hello
      </View>
    );


};

export default Home;