import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Version from "./Components/Home/Version/Version";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Version />} />
          <Route path="/" element={<Version />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
