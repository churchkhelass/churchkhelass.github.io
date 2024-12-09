import React from "react";
import { Task } from "../src/types";

interface TaskListProps {
  tasks: Task[];
  toggleCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleCompletion, deleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => toggleCompletion(task.id)} 
          />
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;