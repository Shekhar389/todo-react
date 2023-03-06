import './App.css';
import {useState} from "react";
import {Task} from "./Task";

//Comments were added to this file
function App() {
    const [todoList,setTodo]=useState([]);
    const [newTask,setNewTask]=useState("");

    const handleTask=(event)=>{
        setNewTask(event.target.value)
    };

    const addTodo=()=>{
        const task={
            id : todoList.length===0 ? 1 :todoList[todoList.length-1].id+1,
            taskName : newTask,
        }
      setTodo([...todoList,task])
    };

    const deleteTask=(id)=>{

        setTodo(todoList.filter((task)=>task.id!==id))
    };

  return (
    <div className="App">
        <div className="addTask">
            <h1>This is a Demo TO-DO List Application</h1><div></div>
            <input className="css-input" onChange={handleTask}/>
            <button className="btn" onClick={addTodo}>Add Task</button>
        </div>

        <div className="list">
            {todoList.map((task)=>{
            return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask}/>
            })}
        </div>
    </div>
  );
}

export default App;
