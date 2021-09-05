import React from 'react';
import './App.css';
import TodoContainer from './TodoContainer';

function App() {
  console.log(window.itemObjects);
  return (
    <div>
      <TodoContainer boardName={window.name} todoList={window.todoList} />
    </div>
  );
}

export default App;
