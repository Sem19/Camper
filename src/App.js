import "./reset.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
import ErrorBoundary from "./components/Shared/error-boundary/error-boundary";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomePage />
            </ErrorBoundary>
          }
        />
        <Route
          path="/catalog"
          element={
            <ErrorBoundary>
              <CatalogPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="/favorites"
          element={
            <ErrorBoundary>
              <FavoritesPage />
            </ErrorBoundary>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
