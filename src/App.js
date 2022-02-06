import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);
	const filteredHandler = () => {
		switch (status) {
			case 'completed':
				setFilteredTodos(
					todos.filter((todo) => todo.completed === true)
				);
				break;
			case 'uncompleted':
				setFilteredTodos(
					todos.filter((todo) => todo.completed === false)
				);
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};
	useEffect(() => {
		getLocalTodos();
	}, []);
	useEffect(() => {
		filteredHandler();
		saveLocalTodos();
	}, [todos, status]);

	const saveLocalTodos = () => {
		localStorage.setItem('todos', JSON.stringify(todos));
	};
	const getLocalTodos = () => {
		if (localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem('todos'));
			setTodos(todoLocal);
		}
	};

	return (
		<div className="App">
			<h1>To Do List</h1>
			<Form
				setStatus={setStatus}
				todos={todos}
				setTodos={setTodos}
				inputText={inputText}
				setInputText={setInputText}
			/>
			<TodoList
				todos={todos}
				setTodos={setTodos}
				filteredTodos={filteredTodos}
			/>
		</div>
	);
}

export default App;
