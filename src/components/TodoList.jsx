import React from 'react';
import './TodoList.css';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
	return (
		<div className="todoContainer">
			{todos.map((todo) => {
				return (
					<Todo
						id={todo.id}
						todos={todos}
						setTodos={setTodos}
						text={todo.text}
						key={todo.id}
						completed={todo.completed}
					/>
				);
			})}
		</div>
	);
};

export default TodoList;
