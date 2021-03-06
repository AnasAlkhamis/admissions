import "./App.css";
import Register from "./components/register";
import Login from "./components/login";
import Dashbord from "./components/dashbord";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
