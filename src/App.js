import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          {/* <Route path="/TVshows"></Route>
          <Route path="/Movies"></Route>
          <Route path="/Radio"></Route> <Route path="/Music"></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
