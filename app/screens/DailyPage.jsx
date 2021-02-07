
import React, { Component, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { List, Checkbox, Colors } from 'react-native-paper';
import ProgressTracker from '../components/ProgressTracker';
import { db } from '../fire'

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
        fontSize: 36,
        padding: 20,
        paddingBottom: 0,
    },
});

export default function DailyPage (props) {

    const [tasks, setTasks] = React.useState([]);
    // const getTasks = async () =>{
        if (!tasks.length) {
        db.collection('users').doc('1PRA4').get().then(doc => {
            var gettasks = doc.data()["Victor"]["Tasks"];
            var progress = doc.data()["Victor"]["Progress"];
            var curDay = 0;
            setTasks(gettasks.map(task=>{return{name:task, done:progress[task][curDay]}}))
            console.log(gettasks.map(task=>{return{name:task, done:progress[task][curDay]}}));
        })
        // }
    }
    // useEffect(() => {if (!tasks) {
    //     getTasks();
    // }}, [])

    const friends = [
        {progress: 0, initials: 'ME', name: 'ME'},
        {progress: 0.1, initials: 'AP', name: 'Simon'},
        {progress: 0.7, initials: 'LH', name: 'Victor'},
        {progress: 0.5, initials: 'BN', name: 'Aadit'},
    ]

    const updateFriends = () => {
        var count = 0
        tasks.forEach((task) => {
            if (task.done == true) count++;
        })
        friends[0]["progress"] = count / tasks.length / 7;
    }
    updateFriends();
    

    const [tasksExpanded, setTasksExpanded] = React.useState(true);
    const [friendsExpanded, setFriendsExpanded] = React.useState(true);

    const handleTaskAccordion = () => setTasksExpanded(!tasksExpanded);
    const handleFriendsAccordion = () => setFriendsExpanded(!friendsExpanded);
    
    const checkItem = (name) => {
        let newTasks = tasks;
        for (var i = 0; i < newTasks.length; i++) {
            if (newTasks[i].name == name) {
                newTasks[i].done = !newTasks[i].done;
                var newStatus = newTasks[i].done
                //tasks[i].done = !tasks[i].done;
            }
        }
        setTasks(newTasks);
        db.collection('users').doc('1PRA4').get().then(doc => {
            var progress = doc.data()["Victor"]["Progress"];
            var curDay = 0;
            progress[name][curDay] = newStatus;
            console.log(progress)

            doc.ref.update({"Progress": progress})
        })
        console.log(tasks);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <List.Section>
                <List.Accordion 
                    title="Today's Tasks"
                    expanded={tasksExpanded}
                    onPress={handleTaskAccordion}
                    description="View your tasks for the day."
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