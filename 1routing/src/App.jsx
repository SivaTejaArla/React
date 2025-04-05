import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/:id/:name" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
