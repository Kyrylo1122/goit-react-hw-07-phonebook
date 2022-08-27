import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = { key: 'contacts', storage };

export const Slice = createSlice({
  name: 'Contacts',
  initialState: {
    items: [],
    filter: '',
    value: 0,
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    removeContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    cFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const persistedContactsReducer = persistReducer(
  persistConfig,
  Slice.reducer
);
export const { addContact, removeContact, cFilter } = Slice.actions;
