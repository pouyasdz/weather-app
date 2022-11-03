import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/AboutUs";
import Weather from "./pages/Weather";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Weather/>} />
        <Route path="/about-us" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
