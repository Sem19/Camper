import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import CatalogPage from "./components/catalog-page/catalog-page";
import ErrorBoundary from "./components/Shared/error-boundary/error-boundary";
import FavoritesPage from "./components/favorites-page/favorites-page";
import HomePage from "./components/home-page/home-page";

function App() {
  return (
    <div>
      <Header />
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <HomePage />
              </ErrorBoundary>
            }
            key="home"
          />
          <Route
            path="/catalog"
            element={
              <ErrorBoundary>
                <CatalogPage />
              </ErrorBoundary>
            }
            key="catalog"
          />
          <Route
            path="/favorites"
            element={
              <ErrorBoundary>
                <FavoritesPage />
              </ErrorBoundary>
            }
            key="favorites"
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
