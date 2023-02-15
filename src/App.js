import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TVShows from "./pages/TVShows";
import Movies from "./pages/Movies";
import Radio from "./pages/Radio";
import Music from "./pages/Music";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tvshows" element={<TVShows />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/radio" element={<Radio />}></Route>
          <Route path="/music" element={<Music />}></Route>
          {/* <Route path="/TVshows"></Route>
          <Route path="/Movies"></Route>
          <Route path="/Radio"></Route> <Route path="/Music"></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
