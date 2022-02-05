import React from 'react';
import './Todo.css';

const Todo = ({ text, id, completed }) => {
	return (
		<div className="todo">
			<li className="todoList">{text}</li>
			<button className="btn fas fa-check"></button>
			<button className="btn fas fa-trash"></button>
		</div>
	);
};

export default Todo;
