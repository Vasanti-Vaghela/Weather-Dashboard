import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  weatherData: {
    weather: "",
    temperature: "",
  },
  isLoading: false,
  error: null,
};

// export const fetchForecastData = createAsyncThunk("weather/fetchCityWeather",async (city) => {
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=643d6c8f0049d7732aab38687b0f0807&units=metric`
//       );
//       console.log(response);
//       setForecastData(response.data);
//       setError(null);
//     } catch (error) {
//       console.log("Error:", error);
//       setError(
//         `Error fetching weather
//                   data. Please try again.`
//       );
//       setForecastData(null);
//     }
//   });

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeatherData: (state, action) => {
      state.weatherData.weather = action.payload.weather;
      state.weatherData.temperature = action.payload.temperature;
    },
    // setWeatherData:(state,action)=>{
    //     state.weatherData.weather =
    // }
  },
});

export const { getWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;
