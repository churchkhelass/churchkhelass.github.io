import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Тестовое задание', completed: false },
    { id: '2', text: 'Прекрасный код', completed: true },
    { id: '3', text: 'Покрытие тестами', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTask.trim()) {
      setTasks([{ id: Date.now().toString(), text: newTask, completed: false }, ...tasks]);
      setNewTask('');
    }
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="app">
      <Header />
      <div className="todo-container">
        <TodoInput value={newTask} onChange={handleInputChange} onKeyDown={handleKeyDown} />
        <TaskList tasks={filteredTasks} toggleTask={toggleTask} />
        <Footer
          tasksLeft={tasks.filter((task) => !task.completed).length}
          filter={filter}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
};

export default App;