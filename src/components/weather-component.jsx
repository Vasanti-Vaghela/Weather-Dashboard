import { Box, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherData } from "../store/weather-slice";

const WeatherComponent = () => {
  const [city, setCity] = useState("");
  const data = useSelector((state) => state.weatherData);
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  console.log(data);
  const fetchForecastData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=643d6c8f0049d7732aab38687b0f0807&units=metric`
      );
      console.log(response.data.list[0].main.temp);
      console.log(response.data.list[0].weather[0].description);
      let temperature = response.data.list[0].main.temp;
      let weather = response.data.list[0].weather[0].description;
      dispatch(getWeatherData({ weather, temperature }));
      setError(null);
    } catch (error) {
      console.log("Error:", error);
      setError(
        `Error fetching weather 
        data. Please try again.`
      );
      setForecastData(null);
    }
  };
  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=643d6c8f0049d7732aab38687b0f0807&units=metric`
        );
        console.log(response.data.list[0].main.temp);
        console.log(response.data.list[0].weather[0].description);
        let temperature = response.data.list[0].main.temp;
        let weather = response.data.list[0].weather[0].description;
        dispatch(getWeatherData({ weather, temperature }));
        setError(null);
      } catch (error) {
        console.log("Error:", error);
        setError(
          `Error fetching weather 
          data. Please try again.`
        );
        setForecastData(null);
      }
    };
    if (city) {
      fetchForecastData();
    }
  }, [city, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchForecastData();
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></TextField>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">City:{city}</Typography>
          <Typography variant="body2">Tempearture:{data}</Typography>
          <Typography variant="body2">Weather:{data}</Typography>
        </Box>
      </Box>
    </form>
  );
};

export default WeatherComponent;
