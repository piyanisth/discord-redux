import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({

  name: 'user',
  initialState: {
    user: null,
  },

  reducers: {

    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },
});

export const { login, logout } = userSlice.actions;

// selector is basically how we can go ahead and grab reducers info once its done
export const selectUser = (state) => state.user.user; // 1. user slice 2.si ise state (user: null)


export default userSlice.reducer;
