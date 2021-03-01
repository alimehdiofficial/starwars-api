import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    character: null,
  },
  reducers: {
    setCharacter: (state, action) => {
      state.character = action.payload;
    },
  },
});

export const { setCharacter } = characterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.character.value)`
export const selectCharacter = (state) => state.character.character;

export default characterSlice.reducer;
