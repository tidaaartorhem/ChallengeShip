
import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import { Badge } from 'react-native-elements';
import * as Progress from 'react-native-progress';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40
  },
  progressBar: {
    width: 100,
  },
  header: {
    fontSize: 25,
    margin: 40
  },
  progress: {
    margin: 40
  },
  progressText: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto"
  },
  progressIcons: {
    margin: 40,
    flexDirection: "row"
  },
  icon: {
    margin: 10
  },
  returnButton: {
    position:"absolute",
    bottom: 50,
  }
});

const days = [
  {name: "S", progress: 100},
  {name: "M", progress: 0},
  {name: "T", progress: 0},
  {name: "W", progress: 0},
  {name: "T", progress: 0},
  {name: "F", progress: 0},
  {name: "S", progress: 0},
]

const toStatus = (progress) => {
  if (progress >= 70) {
    return "success"
  } else if (progress >= 50) {
    return "warning"
  } else {
    return "error"
  }
}

export default function WeeklyTracker (props) {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      setProgress(14)
    }, [])
    return (
        <View style={styles.container}>
          <Text style={styles.header}>Weekly Progress</Text>
          <View style={styles.header}>
            <Progress.Bar progress={progress/100} width={200} height={20}/>
            <Text style={styles.progressText}>{progress}%</Text>
          </View>
          <View style={styles.progressIcons}>
            {
              days ? days.map((day, index) => (
                <Badge key={index} width={25} badgeStyle={styles.icon} status={toStatus(day.progress)} value={<Text>{day.name}</Text>}></Badge>
              )) : null
            }
          </View>
          <Button style={styles.returnButton} color="black" title="Return" />
        </View>
    )
}