import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "tasktodo",
  initialState: {
    tasks: JSON.parse(localStorage.getItem("task"))
      ? JSON.parse(localStorage.getItem("task"))
      : [],
  },
  reducers: {
    addTodoTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTodoTask: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload.id);
    },
    handleCompleteTask: (state, action) => {
      state.tasks.map((item) => {
        if (item.id == action.payload.item.id) {
          item.isComplete = true;
        }
      });
    },
  },
});

export const { addTodoTask, deleteTodoTask, handleCompleteTask } =
  todoSlice.actions;
export default todoSlice.reducer;
