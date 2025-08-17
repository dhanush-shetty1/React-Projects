import React from "react";
import { useState } from "react";
import { Task } from "./Task";
function App(){
  const [todoList, setTodoList]=useState([]);
  const [newTask,setNewTask]=useState("");

  const handleChange=(event)=>{
    setNewTask(event.target.value);
  }
  const addTask=()=>{
    if (newTask.trim() === "") return;
    const task={
      id: todoList.length===0?1:todoList[todoList.length-1].id+1,
      taskName: newTask,
      completed:false,
    }
    setTodoList([...todoList,task])
    setNewTask("");

  }

  const deleteTask=(id)=>{
    const newlist=todoList.filter((task)=>task.id!==id )
    setTodoList(newlist)
  }

  const completeTask=(id)=>{
    setTodoList(
      todoList.map((task)=>{
        if(task.id===id){
          return{...task,completed:true}
        }
        else{
          return task;
        }
      })
    )

  }
  return(
    <div className="App">
      <div className="addTask">
        <input value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task)=>{
          return(
            <Task
            key={task.id} 
            taskName={task.taskName}
             id={task.id} 
             deleteTask={deleteTask}
             completed={task.completed}
             completeTask={completeTask}/>
          )
        })}
      </div>
      
    </div>
  )
  
}



export default App;
