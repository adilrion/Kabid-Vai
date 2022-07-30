import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Shared/Navigation/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigation />} />
          <Route path="/*" element={<Navigation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
