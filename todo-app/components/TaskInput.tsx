import React, { useState } from "react";

interface TaskInputProps {
  addTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleAddTask = () => {
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={e => setText(e.target.value)} 
        placeholder="Enter a task" 
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default TaskInput;