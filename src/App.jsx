import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter
        basename={
          import.meta.env.DEV ? "/" : "/react-vite-project-template-js/"
        }
      >
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/another" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
