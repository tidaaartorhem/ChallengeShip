
import React, { Component, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { List, Checkbox } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
    }
});

export default function DailyTasks (props) {
    const checkItem = props.checkItem;
    return (
        <View style={styles.container}>
            <List.Section>
                <List.Accordion title="Today's Tasks">
                    {  props.tasks ? props.tasks.map((item, index) => {
                            return (
                                <List.Item 
                                    title={item.name} 
                                    key={index}
                                    right={props => <Checkbox
                                        status={item.done ? 'checked' : 'unchecked'}
                                        onPress={() => checkItem(item.name)}
                                        />}
                                />
                            )
                        }) : null
                     }
                </List.Accordion>
            </List.Section>

        </View>
    )
}