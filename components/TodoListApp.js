import React, { useState, useEffect } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  FlatList
} from 'react-native';
import TodoList from './TodoList';
import TodoForm from './TodoForm';



const TodoListApp = () => {
    const initialTodoList = [
        {
            id: 1,
            todo: "Learn React Native",
            completed: false
        },
        {
            id: 2,
            todo: "Learn Redux",
            completed: true
        }
    ];

    const [data, setData] = useState(initialTodoList);

    const addTodo = (newTodo, newCompleted) => {
        if (newTodo === null) return;
        setData([...data, {id: Math.random(), todo: newTodo, completed: newCompleted}]);
    }

    const removeTodo = (todoId) => {
        const updatedTodos = data.filter((todoItem) => todoItem.id !== todoId);
        setData(updatedTodos);
    }

    const editTodo = (todoId, newTodo) => {
        const updatedTodos = data.map(todoItem => (
            todoItem.id === todoId 
            ? {
                ...todoItem,
                todo: newTodo
            }
            : todoItem
        ));
        setData(updatedTodos);
    }

    const toggleTodo = (todoId) => {
        const updatedTodos = data.map(todoItem => (
            todoItem.id === todoId 
            ? { ...todoItem, completed: !todoItem.completed }
            : todoItem
        ));
        setData(updatedTodos)
    }

    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today's Tasks</Text>
             
                    <TodoList 
                    data={data}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                    toggleTodo={toggleTodo}/>
            
                
            </View>
            <TodoForm 
                addTodo={addTodo}
                data={data}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
})

export default TodoListApp;

