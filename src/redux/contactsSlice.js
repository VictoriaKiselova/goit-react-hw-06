import { createSlice } from "@reduxjs/toolkit";
import itemsList from "/startValuesContacts.json";
import { nanoid } from "nanoid";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: itemsList,
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: values => {
        return {
          payload: {
            id: nanoid(),
            ...values,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
