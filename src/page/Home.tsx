import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setFilter, Filter } from '../store/slices/todosSlice';
import TodoList from '../components/TodoList';
import { RootState } from '../store/store';

const Home: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const handleAddClick = () => {
    if (inputVal.trim()) {
      dispatch(addTodo(inputVal));
      setInputVal('');
    }
  };
  const handleSetFilter = (value: string) => {
    dispatch(setFilter(value as Filter));
  };
  return (
    <div className="flex justify-center mt-24 mb-9">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
        <div className="mb-4">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2 outline-none"
            placeholder="Enter a new todo"
          />
          <button
            onClick={handleAddClick}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 outline-none"
          >
            Add Todo
          </button>
        </div>
        <div className="mb-4">
          <select
            defaultValue={todos.filter}
            onChange={(e) => handleSetFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded outline-none"
          >
            <option>All</option>
            <option>Active</option>
            <option>Completed</option>
          </select>
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
