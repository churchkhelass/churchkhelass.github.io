import React from 'react';

interface TodoInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ value, onChange, onKeyDown }) => {
  return (
    <input
      className="todo-input"
      placeholder="What needs to be done?"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown} // Обработчик нажатия Enter
    />
  );
};

export default TodoInput;