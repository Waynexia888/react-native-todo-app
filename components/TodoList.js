import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import Task from './Task';

const TodoList = ({ data, removeTodo, editTodo, toggleTodo }) => {
    return (
        <View style={styles.items}>
            {data.length && data.map((todoItem) => (
                <Task 
                    { ...todoItem }
                    key={todoItem.id}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    items: {
        marginTop: 30,
    }
})

export default TodoList;