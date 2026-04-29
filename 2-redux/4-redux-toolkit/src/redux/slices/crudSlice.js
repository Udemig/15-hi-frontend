import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
  name: "crud",
  initialState: { tasks: [] },
  reducers: {
    createTask: (state, action) => {
      // kaydedilecek task'e id ekle
      action.payload.id = new Date().getTime();

      // task'i diziye ekle
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {},
  },
});

export const { createTask, deleteTask } = crudSlice.actions;

export default crudSlice.reducer;
