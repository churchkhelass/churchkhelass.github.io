import React, { useState } from "react";
import { Task } from "./types";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const allTasks = tasks;
  const completedTasks = tasks.filter(task => task.completed);
  const activeTasks = tasks.filter(task => !task.completed);

  return (
    <div>
      <h1>ToDo App</h1>
      <TaskInput addTask={addTask} />
      <h2>All Tasks</h2>
      <TaskList tasks={allTasks} toggleCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
      <h2>Active Tasks</h2>
      <TaskList tasks={activeTasks} toggleCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
      <h2>Completed Tasks</h2>
      <TaskList tasks={completedTasks} toggleCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
