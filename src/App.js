import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MovieList />
      <Movies />
    </div>
  );
}

export default App;
