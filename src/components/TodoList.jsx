import React from 'react';
import './TodoList.css';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
	return (
		<div className="todoContainer">
			{filteredTodos.map((todo) => {
				return (
					<Todo
						todo={todo}
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
