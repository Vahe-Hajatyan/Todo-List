import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../store/slices/todosSlice';
interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <div >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo(id))}
      />
      <span >{text}</span>
      <button onClick={() => dispatch(removeTodo(id))}>Delete</button>
    </div>
  );
};

export default TodoItem;
