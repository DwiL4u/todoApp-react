import React, { useState, useEffect} from 'react'
import './App.css'
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import todoIcon from './assets/direct-hit.png'
import inProgressIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'

const oldTasks = localStorage.getItem('tasks');
console.log(oldTasks);


const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const handleDelete = (taskIndex) => { 
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn title="To Do" icon={todoIcon} task={tasks} status="todo" handleDelete={handleDelete}/>
        <TaskColumn
          title="In Proggress"
          icon={inProgressIcon}
          task={tasks}
          status="inprogress" handleDelete={handleDelete}
        />
        <TaskColumn title="Completed" icon={doneIcon} task={tasks} status="completed" handleDelete={handleDelete}/>
      </main>
    </div>
  );
}

export default App
