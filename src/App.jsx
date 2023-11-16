import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Login from "./components/Login";
import HomeLogin from "./screens/HomeLogin";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/Home" element={<HomeLogin />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
