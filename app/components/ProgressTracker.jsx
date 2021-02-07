
import React, { Component } from 'react';
import { ProgressBar, Colors, Avatar } from 'react-native-paper';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginLeft: 10
    },
    progressBar: {
        width: 150,
        marginTop: 30,
        margin: 5,
        height: 20,
        borderRadius: 20,
    },
    percentage: {
        width: 50,
        marginTop: 25,
        marginLeft: 5
    },
    avatar: {
        width: 30,
        height: 30,
        marginTop: 35,
        margin: 10,
        backgroundColor: Colors.grey100,
        borderRadius: 20,
    },
    name: {
        width: 80,
        marginTop: 25

    }
});

export default function ProgressTracker (props) {
    //0%-30%: Red, 30%-70: Yellow, 70%-100%: Green
    let barColor = Colors.red800;
    if (props.progress >= 0.7) {
        barColor = Colors.green800
    } else if (props.progress >= 0.3) {
        barColor = Colors.yellow800
    }
    
    return (
        <View style={styles.container}>
            <Avatar.Text
                style={styles.avatar}
                size={24}
                label={props.initials}
            />

            <Text style={styles.name}>
                {props.name}
            </Text>

            <ProgressBar
                style={styles.progressBar}
                progress={props.progress}
                color={barColor}
            />

            <Text style={styles.percentage}>
                {`${(props.progress*100).toFixed(0)}%`}
            </Text>

        </View>
    )
}