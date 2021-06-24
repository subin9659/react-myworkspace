// AJAX library
import axios from "axios";

const openDataApi = {
  fetchDustHourly: () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/opendata/dust/hourly`),
  fetchHealthdata: () =>
    axios.get(
      `${process.env.REACT_APP_API_BASE}/opendata/healthdata/Healthdata`
    ),
  fetchWeatherUV: () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/opendata/weatherUV/WeatherUV`),
  fetchSummer: () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/opendata/summer/Summer`),
};

export default openDataApi;
