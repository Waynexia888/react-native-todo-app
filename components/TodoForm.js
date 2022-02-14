import React, { useState } from 'react';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TodoForm = ({ data, addTodo }) => {
    const initialValue = {
        content: "",
        isCompleted: false
    }
    const [input, setInput] = useState(initialValue);

    const handleAddTask = () => {
        addTodo(input.content, input.isCompleted);
        setInput(initialValue);
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : 'height'}
            style={styles.writeTaskWrapper}
        >
            <TextInput 
                style={styles.input} 
                placeholder={'Write a task'}
                value={input.content}
                // onChangeText={(text) => setInput({ ...input, content: text })}
                onChange={(e) => setInput({ ...input, content: e.nativeEvent.text })}
                // keyboardType = "numeric"
            />
            <TouchableOpacity onPress={handleAddTask}>
                <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {}
})
export default TodoForm;

