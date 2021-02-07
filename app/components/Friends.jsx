import React, { Component } from 'react';
import { List } from 'react-native-paper';
import ProgressTracker from './ProgressTracker';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: 50
    },
});

export default function Friends (props) {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    return (
        <View style={styles.container}>
            <List.Section>
                <List.Accordion title="Friends">
                    { props.friends ? props.friends.map((item, index) => {
                        return (
                            <ProgressTracker 
                                progress={item.progress}
                                initials={item.initials}
                                name={item.name}
                            />     
                        )
                    }) : null
                }
                </List.Accordion>
            </List.Section>
        </View>
    )
}