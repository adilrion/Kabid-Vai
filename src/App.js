import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Shared/Navigation/Navigation";

function App() {
  const client = new QueryClient();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <QueryClientProvider client={client}>
                <Navigation />
              </QueryClientProvider>
            }
          />
          <Route
            path="/*"
            element={
              <QueryClientProvider client={client}>
                <Navigation />{" "}
              </QueryClientProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
