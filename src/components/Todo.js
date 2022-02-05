import React from 'react';
import './Todo.css';

const Todo = () => {
	return (
		<div className="todo">
			<li className="todoList">Hey Arnold!</li>
			<button className="btn fas fa-check"></button>
			<button className="btn fas fa-trash"></button>
		</div>
	);
};

export default Todo;
