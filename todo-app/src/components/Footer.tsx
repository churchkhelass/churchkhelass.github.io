import React from 'react';

interface FooterProps {
  tasksLeft: number;
  filter: string;
  setFilter: (filter: string) => void;
  clearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({ tasksLeft, filter, setFilter, clearCompleted }) => {
  return (
    <div className="footer">
      <span>{tasksLeft} items left</span>
      <div className="filters">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>
          All
        </button>
        <button onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>
          Active
        </button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>
          Completed
        </button>
      </div>
      <button className="clear-button" onClick={clearCompleted}>
        Clear completed
      </button>
    </div>
  );
};

export default Footer;