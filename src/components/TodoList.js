import React from 'react';
import './TodoList.css';
import Todo from './Todo';

const TodoList = () => {
	return (
		<div className="todoContainer">
			{/* <ul className="todoList"></ul> */}
			<Todo />
		</div>
	);
};

export default TodoList;
