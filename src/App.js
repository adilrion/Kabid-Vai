import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Version from "./Components/Home/Version/Version";
import VersionBangla from "./Components/Home/Version/VersionBangla";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Version />} />
          <Route path="/" elem ent={<Version />} />
          <Route path="v-english/*" element={<Home />} />
          <Route path="v-bangla" element={<VersionBangla />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
