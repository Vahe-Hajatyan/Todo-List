import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../store/slices/todosSlice';
import { checked, close, garbage } from '../../public/svg';
interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`flex items-center justify-between p-4 bg-white shadow rounded mb-2 ${
        completed ? 'opacity-50' : ''
      }`}
    >
      <span
        title={text}
        className={`flex-1 truncate overflow-hidden whitespace-nowrap outline-none ${
          completed ? 'line-through text-gray-500' : ''
        }`}
      >
        {text}
      </span>
      <div className="flex space-x-2">
        <button
          onClick={() => dispatch(toggleTodo(id))}
          className={`p-2 rounded hover:bg-gray-100 transition outline-none ${
            completed ? 'hover:bg-gray-200' : 'hover:bg-green-100'
          }`}
          aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {completed ? close : checked}
        </button>
        <button
          onClick={() => dispatch(removeTodo(id))}
          className="p-2 rounded hover:bg-red-100 transition outline-none"
          aria-label="Delete todo"
        >
          {garbage}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
