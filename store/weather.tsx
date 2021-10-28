import { createSlice } from "@reduxjs/toolkit";
import { IServerResponse } from "../utils/interfaces";

const initialState: IServerResponse[] = [
  {
    name: "Divino",
    main: {
      feels_like: 18,
      humidity: 60,
      pressure: 1500,
      temp: 18,
    },
    wind: {
      speed: 1,
    },
    weather: [
      {
        id: 1,
        main: "Clear",
        description: "Clear sky",
        icon: "01d",
      },
    ],
  },
  {
    name: "Carangola",
    main: {
      feels_like: 18,
      humidity: 60,
      pressure: 1500,
      temp: 18,
    },
    wind: {
      speed: 1,
    },
    weather: [
      {
        id: 1,
        main: "Clear",
        description: "Clear sky",
        icon: "01d",
      },
    ],
  },
];

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
