import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_TASKS } from "../../utils/constants";

const crudSlice = createSlice({
  name: "crud",
  initialState: { tasks: INITIAL_TASKS },
  reducers: {
    createTask: (state, action) => {
      // kaydedilecek task'e id ekle
      action.payload.id = new Date().getTime();

      // task'i diziye ekle
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      // silinecek elemanın dizideki sırasını bul
      const index = state.tasks.findIndex((item) => item.id === action.payload);

      // task'i diziden kaldır
      state.tasks.splice(index, 1);
    },

    updateTask: (state, action) => {
      // güncellenicek elemanın dizideki sırasını bul
      const index = state.tasks.findIndex((item) => item.id === action.payload.id);

      // task dizisini güncelle
      state.tasks.splice(index, 1, action.payload);
    },
  },
});

export const { createTask, deleteTask, updateTask } = crudSlice.actions;

export default crudSlice.reducer;
