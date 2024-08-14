import React, { useState } from "react";
import style from "./styles/Home.module.css";
const Home = () => {
    //declarando estados
	const [task, setTask] = useState([]);
    //declarando la funcion del evento submit para que agregue tareas
	const sendData = (event) => {
		event.preventDefault();
		let valueInput = event.target.addTask.value
		if (valueInput !== "") {
			const newTask = task.concat(valueInput);
			setTask(newTask);
			event.target.addTask.value = "";
		}
	};
	console.log(task);
	//Declarando la funcion para que el icono 'x' pueda eliminar tareas de la lista
	const deleteTask = (index) => {
		let newArr = task.filter((_,i) => i !== index)
		setTask(newArr);
	};
	return (
		<div className="container-fluid p-5 m-0">
			<h1 className="text-center fst-italic fw-bold display-1 mt-4 text-success">To Do List</h1>
			<form className="p-1 w-75 mx-auto bg-danger-subtle rounded shadow" onSubmit={sendData}>
				<ul className="list-group">
					<li className="list-group-item">
						<input type="text" className={`form-control ${style.inputTask}`} id="addTask" placeholder="What needs to be done?"/>
					</li>
					{
						task.map((item, index) => (
							<li id={index} key={index} className={`list-group-item d-flex justify-content-between ${style.listTask}`}> {item} <i className={`fa-solid fa-xmark bg-danger-subtle p-1 ${style.iconTask}`} onClick={() => deleteTask(index)}></i></li>
						))
					}
					<li className="list-group-item text-secondary">{(task.length===0)? "No tasks, add a task" : "Finish your tasks! You won’t be sleeping tonight!"}</li>
					<li className="list-group-item fw-light fst-italic text-secondary">{task.length} item left</li>
				</ul>
			</form>
		</div>
	);
};
export default Home;
