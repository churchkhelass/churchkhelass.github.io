import React from 'react';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask }) => {
  return (
    <ul className="task-list" style={{maxHeight: '500px', overflowY: 'auto'}}>
      {tasks.map((task) => (
        <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.text}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;