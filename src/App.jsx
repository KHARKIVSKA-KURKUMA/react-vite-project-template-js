import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? "/" : "/react-vite-project-template-js/"}
    >
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Home page</h1>
              <Link to="another">Link to Another Page</Link>
            </div>
          }
        />
        <Route
          path="/another"
          element={
            <div>
              <h1> Another Page</h1>
              <Link to="/">Link to Home</Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
