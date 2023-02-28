import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import { Browser as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
