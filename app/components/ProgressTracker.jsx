
import React, { Component } from 'react';
import { ProgressBar, Colors, Avatar } from 'react-native-paper';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
    },
    progressBar: {
        width: 100,
        marginTop: 35,
        margin: 5
    },
    percentage: {
        width: 50,
        marginTop: 25,
    },
    avatar: {
        width: 30,
        marginTop: 25,
        margin: 5
    },
    name: {
        width: 50,
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
                label={props.initals}
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