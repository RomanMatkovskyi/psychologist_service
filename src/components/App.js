import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h2>Home</h2>} />
          <Route path="psychologists" element={<h2>Psychologists</h2>} />
          <Route path="favorites" element={<h2>Favorites</h2>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
