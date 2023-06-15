import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: Date.now(),
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    id: Date.now() + 1,
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    id: Date.now() + 2,
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: Date.now(),
        ...action.payload,
      };
      state.push(newBook);
    },
    removeBook: (state, action) => {
      const bookIndex = state.findIndex((book) => book.id === action.payload);
      if (bookIndex !== -1) {
        state.splice(bookIndex, 1);
      }
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
