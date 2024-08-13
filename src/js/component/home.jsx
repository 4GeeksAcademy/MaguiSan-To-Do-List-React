import React, { useState } from "react";
//create your first component
const Home = () => {
	const [task, setTask] = useState([]);

	const sendData = (event) => {
		event.preventDefault();
		let valueInput = event.target.addTask.value
		// console.log(event.target.addTask.value);
		if (valueInput !== "") {
			// console.log('no estoy vacio')
			const newTask = task.concat(valueInput);
			setTask(newTask);
			event.target.addTask.value = "";
		}
	};
	console.log(task);
	//Declarando la funcion para que el icono 'x' pueda eliminar elementos de la lista
	const deleteTask = (index) => {
		// console.log('me borraste?');
		let newArr = task.filter((_,i) => i !== index)
		setTask(newArr);
	};

	return (
		<div className="container">
			<h1 className="text-center mt-5">To Do List</h1>
			<form className="p-3 w-50 mx-auto" onSubmit={sendData}>
				<ul className="list-group">
					<li className="list-group-item">
						<input type="text" className="form-control" id="addTask" placeholder="Add to do here" style={{ border: "none", outline: "none" }} />
					</li>
					{
						task.map((item, index) => (
							<li id={index} key={index} className="list-group-item">{item} <i className="fa-solid fa-x fa-xs" onClick={() => deleteTask(index)}></i></li>
						))
					}
				</ul>
			</form>
			<p>{(task.length)>3? "termina tus tareas": "excelente! ve a dormir!"}</p>
		</div>
	);
};
export default Home;
