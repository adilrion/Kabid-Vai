import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Version from "./Components/Home/Version/Version";
import VersionBangla from "./Components/Home/Version/VersionBangla";
import Navigation from "./Components/Shared/Navigation/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Version />} />
          <Route path="/" element={<Version />} />
          <Route path="home" element={<Version />} />
          <Route path="v-english/*" element={<Navigation />} />
          <Route path="v-bangla" element={<VersionBangla />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
