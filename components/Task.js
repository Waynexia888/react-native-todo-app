import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import EditTodoForm from './EditTodoForm';


const Task = ({ id, todo, completed, removeTodo, editTodo, toggleTodo }) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
      
        <View style={styles.item}>
            {isEditing ? (
                <View style={styles.itemLeft}>
                    <EditTodoForm 
                        id={id}
                        todo={todo}
                        editTodo={editTodo} 
                        toggleEditForm={() => setIsEditing(!isEditing)}
                    />
                </View>
            ) : (
                <>
                <View style={styles.itemLeft}>
                {/* <TouchableOpacity onPress={() => markTodoComplete(id)}> */}
                    {/* <View style={styles.completedIcon}>
                        <Icon name="done" size={20} color="white" />
                    </View> */}
                    {/* <View style={styles.completedIcon}>
                        <CheckBox checked={completed} checkedColor="#8cd2fa"></CheckBox>
                    </View> */}
                    <CheckBox 
                        checked={completed} 
                        checkedColor="#8cd2fa"
                        onPress={() => toggleTodo(id)}
                    ></CheckBox>
                    
                {/* </TouchableOpacity> */}
                {/* {console.log(todo)} */}
                <Text style={styles.itemText}>{todo}</Text>
            </View>
            
            <View style={styles.itemRight}>
                <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
                    <View style={styles.edit}>
                        <Icon name="edit" size={20} color='#55BCF6' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => removeTodo(id)}>
                    <View style={styles.delete} >
                        <Icon name="delete" size={20} color='#55BCF6'/>
                    </View>
                    {/* <MaterialIcons style={styles.delete} name="delete" size={20} color='#55BCF6' /> */}
                </TouchableOpacity>
            </View>
            </>
            )}
            
            
        </View>

    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    completedIcon: {},
    itemText: {
        maxWidth: '70%',
    },
    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    edit: {},
    delete: {},
    
})
export default Task;