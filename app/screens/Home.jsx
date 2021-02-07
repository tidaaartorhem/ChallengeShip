import React, { useState } from 'react';
import { View, Alert, Modal, StyleSheet, Text, TouchableHighlight, Button, TextInput } from 'react-native';
import CreateGroup from './CreateGroup.jsx'
import LoginScreen from './login';


const Home = props => {

    const [loggedIn, setLoggedIn] = useState(false);


    return(
       
      <View>
          <CreateGroup/>
      </View>
    );


};

export default Home;