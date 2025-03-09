import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/landingPage.jsx";
import Portfolio from "./Pages/portfolio.jsx";
import Case from "./Pages/case.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/MichelleVEL" element={<Landing />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Case" element={<Case />} />
      </Routes>
    </>
  );
}

export default App;
