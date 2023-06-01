import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { fetchTasks, addTask, deleteTask, updateTask } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};
export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,

  extraReducers: {
    [fetchTasks.pending]: handlePending,
    [fetchTasks.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.tasks = payload;
    },
    [fetchTasks.rejected]: handleRejected,

    [addTask.pending]: handlePending,
    [addTask.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.tasks.push(payload);
    },
    [addTask.rejected]: handleRejected,

    [deleteTask.pending]: handlePending,
    [deleteTask.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      const tasksId = state.tasks.findIndex(
        item => item.id === payload.id,
      );
      state.tasks.splice(tasksId, 1);
    },
    [deleteTask.rejected]: handleRejected,

    [updateTask.pending]: handlePending,
    [updateTask.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      const tasksId = state.tasks.findIndex(
        item => item.id === payload.id,
      );
      state.tasks.splice(tasksId, 1);
    },
    [updateTask.rejected]: handleRejected,

    [logOut.fulfilled]:(state) =>{
      state.tasks = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const tasksReducer = tasksSlice.reducer;

