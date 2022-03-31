import axios from "axios";

const API_KEY = dfc79c7;

const requests = axios.create({
  baseUrl: "http://www.omdbapi.com",
});

requests.get("/?apikey=${API_KEY}&");

export default requests;
