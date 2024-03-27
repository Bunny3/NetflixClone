import { createSlice } from "@reduxjs/toolkit";

const userSice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    addUser: (state, action)=> {
      return action.payload;
    },
    removeUser: (state, actions)=>{
      return null;
    },
  },
});

export const {addUser, removeUser} = userSice.actions;

export default userSice.reducer;