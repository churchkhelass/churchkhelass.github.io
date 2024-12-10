import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('ToDo App', () => {
  it('adds a new task when Enter is pressed', () => {
    render(<App />);

    // Найти поле ввода
    const inputElement = screen.getByPlaceholderText('What needs to be done?');

    // Ввести текст в поле
    fireEvent.change(inputElement, { target: { value: 'New Task' } });

    // Нажать клавишу Enter
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    // Проверить, что новая задача появилась в списке
    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  it('clears the input field after adding a task', () => {
    render(<App />);

    // Найти поле ввода
    const inputElement = screen.getByPlaceholderText('What needs to be done?');

    // Ввести текст в поле
    fireEvent.change(inputElement, { target: { value: 'Another Task' } });

    // Нажать клавишу Enter
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    // Проверить, что поле ввода очистилось
    expect((inputElement as HTMLInputElement).value).toBe('');
  });

  it('deletes completed tasks when "Clear completed" is clicked', () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText('What needs to be done?');

    // Добавляем задачу
    fireEvent.change(inputElement, { target: { value: 'Task to complete' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    // Найти чекбокс задачи
    const checkbox = screen.getByLabelText('Task to complete');
    fireEvent.click(checkbox);  // Завершаем задачу (выбираем чекбокс)

    // Нажимаем "Clear completed"
    const clearButton = screen.getByText('Clear completed');
    fireEvent.click(clearButton);

    // Проверяем, что задача удалена
    expect(screen.queryByText('Task to complete')).not.toBeInTheDocument();
  });

  it('toggles tasks between active and completed', () => {
    render(<App />);
  
    const inputElement = screen.getByPlaceholderText('What needs to be done?');
  
    // Добавляем задачу
    fireEvent.change(inputElement, { target: { value: 'Toggle Task' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
  
    // Найти чекбокс задачи и переключить ее в выполненные
    const completedTaskCheckbox = screen.getByLabelText(/Toggle Task/i); // Найти чекбокс задачи
    fireEvent.click(completedTaskCheckbox); // Задача выполнена
  
    // Проверяем, что задача помечена как выполненная
    expect(completedTaskCheckbox).toBeChecked();
  
    // Снова переключаем задачу в "активные"
    fireEvent.click(completedTaskCheckbox); // Переключаем обратно
  
    // Проверяем, что задача больше не выполненная
    expect(completedTaskCheckbox).not.toBeChecked();
  });

  it('filters tasks by All, Active, and Completed', () => {
    render(<App />);
  
    const inputElement = screen.getByPlaceholderText('What needs to be done?');
  
    // Добавляем 2 задачи
    fireEvent.change(inputElement, { target: { value: 'Active Task' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
  
    fireEvent.change(inputElement, { target: { value: 'Completed Task' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
  
    // Завершаем вторую задачу
    const completedTaskCheckbox = screen.getByLabelText(/Completed Task/i); // Найти чекбокс задачи
    fireEvent.click(completedTaskCheckbox); // Сделать задачу выполненной
  
    // Фильтр: Active
    const activeButton = screen.getByText('Active');
    fireEvent.click(activeButton);
  
    expect(screen.getByText('Active Task')).toBeInTheDocument();
    expect(screen.queryByText('Completed Task')).not.toBeInTheDocument();
  
    // Фильтр: Completed
    const completedButton = screen.getByText('Completed');
    fireEvent.click(completedButton);
  
    expect(screen.getByText('Completed Task')).toBeInTheDocument();
    expect(screen.queryByText('Active Task')).not.toBeInTheDocument();
  
    // Фильтр: All
    const allButton = screen.getByText('All');
    fireEvent.click(allButton);
  
    expect(screen.getByText('Active Task')).toBeInTheDocument();
    expect(screen.getByText('Completed Task')).toBeInTheDocument();
  });
});