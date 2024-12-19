import { Provider } from "react-redux";
import "./App.css";
import store from "./store/store";
import WeatherComponent from "./components/weather-component";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center">
          Weather Dashboard
        </Typography>
        <WeatherComponent />
      </Container>
    </Provider>
  );
}

export default App;
