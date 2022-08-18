import React, { useState } from 'react';
import './styles.css';
import TodoHeader from './components/TodoHeader.js';
import TodoToggleAll from './components/TodoToggleAll';
import TodoFooter from './components/TodoFooter';
import TodoList from './components/TodoList';

export default function App() {
  const [filter, setFilter] = useState('all');
  const [todos, setTodos] = useState([
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
    { id: 3, title: 'Todo 3', completed: false },
  ]);

  return (
    <section className="todoapp">
      <TodoHeader />
      <section className="main">
        <TodoToggleAll />
        <TodoList filter={filter} todos={todos} setTodos={setTodos} />
      </section>
      <TodoFooter filter={filter} setFilter={setFilter} />
    </section>
  );
}
