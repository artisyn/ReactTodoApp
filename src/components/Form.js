import React from 'react';
import './Form.css';
const Form = () => {
	return (
		<form className="form" action="">
			<input type="text" className="inputText" name="" id="" />
			<button type="submit" className="plusButton">
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select className="todoFilter" name="" id="">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
};
export default Form;
