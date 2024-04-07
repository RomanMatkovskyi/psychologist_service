import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/about" element={<h2>About page</h2>} />
        <Route path="/products" element={<h2>Products Page</h2>} />
      </Routes>
    </div>
  );
}

export default App;
