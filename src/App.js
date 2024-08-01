import { Route, Routes, HashRouter } from "react-router-dom";
import Header from "./components/header/header";
import CatalogPage from "./components/catalog-page/catalog-page";
import ErrorBoundary from "./components/Shared/error-boundary/error-boundary";
import FavoritesPage from "./components/favorites-page/favorites-page";
import HomePage from "./components/home-page/home-page";

function App() {
  return (
    <div>
      <HashRouter basename="/catalog">
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
      </HashRouter>
    </div>
  );
}

export default App;
