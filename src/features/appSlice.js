import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({

  name: 'app',
  initialState: {
    channelId: null,
    channelName: null,
  },

  reducers: {

    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
      // state.app += action.payload;
    },
  },
});

export const { setChannelInfo } = appSlice.actions;

// selector is basically how we can go ahead and grab reducers info once its done
export const selectChannelId = (state) => state.app.channelId 
                                          //state is global onion layer and then goes inside the app layer and gets the channelId
export const selectChannelName = (state) => state.app.channelName

export default appSlice.reducer;
