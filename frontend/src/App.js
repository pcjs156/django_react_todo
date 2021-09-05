import React from 'react';
import './App.css';
import TodoContainer from './TodoContainer';

function App() {
  return (
    <div>
      <TodoContainer boardName={window.name} todoList={window.todoList} />
    </div>
  );
}

export default App;
