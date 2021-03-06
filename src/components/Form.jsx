import React from 'react';
import './Form.css';
const Form = ({ setStatus, inputText, setInputText, todos, setTodos }) => {
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};
	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1000 },
		]);
		setInputText('');
	};
	const statusHandler = (e) => {
		setStatus(e.target.value);
	};
	return (
		<form className="form" action="">
			<input
				value={inputText}
				onChange={inputTextHandler}
				type="text"
				className="inputText"
				name=""
				id=""
			/>
			<button
				onClick={submitTodoHandler}
				type="submit"
				className="plusButton"
			>
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select
					onChange={statusHandler}
					className="todoFilter"
					name=""
					id=""
				>
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
};
export default Form;
// 32 min
