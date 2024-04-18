import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";
import SuppliersPage from "./pages/SuppliersPage/SuppliersPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <MainPage />
            </Layout>
          }
        />
        <Route
          path="/restaurants"
          element={
            <Layout>
              <RestaurantsPage />
            </Layout>
          }
        />
        <Route
          path="/suppliers"
          element={
            <Layout>
              <SuppliersPage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
