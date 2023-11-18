

import { createSlice } from '@reduxjs/toolkit';

const authorSlice = createSlice({
  name: 'author',
  initialState: {
    authorKey: '',
    authorWorks: [],
    authorName: '',
  },
  reducers: {
    setAuthorKey: (state, action) => {
      return {
        ...state,
        authorKey: action.payload,
      };
    },
    setAuthorData: (state, action) => {
      return {
        ...state,
        authorWorks: action.payload.authorWorks,
        authorName: action.payload.authorName,
      };
    },
  },
});

export const { setAuthorKey, setAuthorData } = authorSlice.actions;
export default authorSlice.reducer;
