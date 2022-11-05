import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/AboutUs";
import Weather from "./pages/Weather";
import { StateProvider } from "./shared/context/states-context";

function App() {
  return (
  <StateProvider>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Weather />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </BrowserRouter>
    </StateProvider>
  );
}

export default App;
