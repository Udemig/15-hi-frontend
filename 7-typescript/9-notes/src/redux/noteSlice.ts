import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Note, NoteValues } from "../types";
import { v4 } from "uuid";

const initialState: { notes: Note[] } = { notes: [] };

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteValues>) => {
      // note'a id ekle
      const newNote: Note = {
        id: v4(),
        ...action.payload,
      };

      // notu diziye ekle
      state.notes.unshift(newNote);
    },

    deleteNote: (state, action: PayloadAction<string>) => {
      const index = state.notes.findIndex((n) => n.id === action.payload);
      state.notes.splice(index, 1);
    },

    updateNote: (state, action: PayloadAction<{ id: string; noteValue: NoteValues }>) => {
      const index = state.notes.findIndex((n) => n.id === action.payload.id);
      state.notes.splice(index, 1, { ...action.payload.noteValue, id: action.payload.id });
    },
  },
});

export const { addNote, deleteNote, updateNote } = noteSlice.actions;

export default noteSlice.reducer;
