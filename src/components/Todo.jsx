import React from 'react';
import './Todo.css';

const Todo = ({ todos, setTodos, text, id, completed }) => {
	const deleteHandler = (e) => {
		setTodos(todos.filter((el) => +el.id !== +e.target.parentElement.id));
	};
	const completeHandler = (e) => {
		setTodos(
			todos.map((el) => {
				if (+el.id === +e.target.parentElement.id)
					el.completed = !el.completed;
				return el;
			})
		);
	};
	return (
		<div className="todo" id={id}>
			<li className={`todoList ${completed === true ? 'completed' : ''}`}>
				{text}
			</li>
			<button
				onClick={completeHandler}
				className="btn fas fa-check"
			></button>
			<button
				onClick={deleteHandler}
				className="btn fas fa-trash"
			></button>
		</div>
	);
};

export default Todo;
