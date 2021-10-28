import { createSlice } from "@reduxjs/toolkit";
import { IServerResponse } from "../utils/interfaces";

const initialState: IServerResponse[] = [];

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    saveWeather(state, action) {
      const data: IServerResponse = action.payload;
      if (state.length === 3) {
        state.shift();
        state.push(data);
        return;
      }
      state.push(data);
    },
  },
});

export const { saveWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
