import { createSlice } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
  filter: Filter;
}

export enum Filter {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}

const initialState: TodosState = {
  todos: [],
  filter: Filter.ALL,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

export default todosSlice.reducer;
