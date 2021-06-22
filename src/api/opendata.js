// AJAX library
import axios from "axios";

const openDataApi = {
  fetchDustHourly: () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/opendata/dust/hourly`),
  fetchFitness: () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/opendata/fitness/Fitness`),
  fetchWeatherUV: () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/opendata/weatherUV/WeatherUV`),
  fetchSummer: () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/opendata/summer/Summer`),
};

export default openDataApi;
