import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Psychologists from "../pages/Psychologists";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="psychologists" element={<Favorites />} />
          <Route path="favorites" element={<Psychologists />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
