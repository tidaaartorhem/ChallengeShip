
import React, { Component, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { List, Checkbox, Colors, Avatar } from 'react-native-paper';
import ProgressTracker from '../components/ProgressTracker';

const theme = {
    colors: {
      primary: '#085582',
    },
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
    },
    friendsContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: 50, 
    }, 
    title: {
        flexDirection: 'column', 
        fontSize: 36,
        padding: 20,
        paddingBottom: 0,
    },
    avatar: {
        alignSelf: 'flex-end',
        width: 50,
        height: 50,
        backgroundColor: Colors.grey100,
        borderRadius: 50,
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    }
});

export default function DailyPage (props) {
    const [tasks, setTasks] = React.useState([
        { name: '20 Crunches', done: false }, 
        { name: '20 Squats', done: true },
        { name: '5 KM Run', done: false },
      ]);

    const friends = [
        {progress: 0.8, initials: 'ME', name: 'ME'},
        {progress: 0.1, initials: 'AP', name: 'Simon'},
        {progress: 0.7, initials: 'LH', name: 'Victor'},
        {progress: 0.5, initials: 'BN', name: 'Aadit'},
    ]

    const [tasksExpanded, setTasksExpanded] = React.useState(true);
    const [friendsExpanded, setFriendsExpanded] = React.useState(true);

    const handleTaskAccordion = () => setTasksExpanded(!tasksExpanded);
    const handleFriendsAccordion = () => setFriendsExpanded(!friendsExpanded);
    
    const checkItem = (name) => {
        let newTasks = tasks;
        for (var i = 0; i < newTasks.length; i++) {
            if (newTasks[i].name == name) {
                newTasks[i].done = !newTasks[i].done;
                //tasks[i].done = !tasks[i].done;
            }
        }
        setTasks(newTasks);
        console.log(tasks);
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>{props.title}</Text>
                <Avatar.Text
                    style={styles.avatar}
                    size={45}
                    label={props.initials}
                />
            </View>
            <List.Section>
                <List.Accordion 
                    theme={theme}
                    title="Today's Tasks"
                    expanded={tasksExpanded}
                    onPress={handleTaskAccordion}
                    description="View your tasks for the day"
                >
                    {  tasks ? tasks.map((item, index) => {
                            return (
                                <List.Item 
                                    title={item.name} 
                                    key={index}
                                    right={props => <Checkbox color={item.done ? Colors.green500: Colors.grey300}
                                        status="checked"
                                        onPress={() => checkItem(item.name)}
                                        />}
                                />
                            )
                        }) : null
                    }
                </List.Accordion>
            </List.Section>
            <List.Section>
                <List.Accordion
                    theme={theme}
                    title="Friends"
                    expanded={friendsExpanded}
                    onPress={handleFriendsAccordion}
                    description="Track your friends' weekly progress"
                >
                    { friends ? friends.map((item, index) => {
                        return (
                            <ProgressTracker 
                                progress={item.progress}
                                initials={item.initials}
                                name={item.name}
                                key={index}
                            />     
                        )
                    }) : null
                }
                </List.Accordion>
            </List.Section>
        </View>
    )
}