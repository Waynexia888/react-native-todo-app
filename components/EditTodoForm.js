import React, { useState } from 'react';
import { View, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EditTodoForm = ({ id, todo, editTodo, toggleEditForm }) => {
    const [inputValue, setInputValue] = useState(todo);
    const handleEditTask = () => {
        editTodo(id, inputValue);
        setInputValue("");
        toggleEditForm();
    }
    return (
        <KeyboardAvoidingView  style={styles.item}
            behavior={Platform.OS === "ios" ? "padding" : 'height'}
            style={styles.writeTaskWrapper}
        >
            <View style={styles.itemLeft}>
                <TextInput 
                    style={styles.input} 
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />
            </View>
            <View style={styles.itemRight}>
                <TouchableOpacity onPress={handleEditTask}>
                    <View style={styles.completedIcon}>
                        <Icon name="done" size={20} color="red" />
                    </View>
                </TouchableOpacity>
            </View>
        
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 18
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    input: {},
    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    completedIcon: {
    }
})

export default EditTodoForm;