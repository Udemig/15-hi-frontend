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

    deleteNote: (state, action: PayloadAction<string>) => {},

    updateNote: (state, action: PayloadAction<{ id: string; noteValue: NoteValues }>) => {},
  },
});

export const { addNote, deleteNote, updateNote } = noteSlice.actions;

export default noteSlice.reducer;
