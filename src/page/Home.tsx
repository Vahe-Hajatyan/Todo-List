import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setFilter, Filter } from '../store/slices/todosSlice';
import TodoList from '../components/TodoList';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const todos = useSelector((state: any) => state.todos);

  const handleAddClick = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };
  const handleSetFilter = (value: string) => {
    dispatch(setFilter(value as Filter));
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddClick}>Add Todo</button>
      <div>
        <select
          defaultValue={todos.filter}
          onChange={(e) => handleSetFilter(e.target.value)}
        >
          <option>All</option>
          <option>Active</option>
          <option>Completed</option>
        </select>
      </div>
      <TodoList />
    </div>
  );
};

export default App;
