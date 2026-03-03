import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import AppointmentPage from "./pages/AppointmentPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="/about"
        element={
          <MainLayout>
            <AboutPage />
          </MainLayout>
        }
      />
      <Route
        path="/services"
        element={
          <MainLayout>
            <ServicesPage />
          </MainLayout>
        }
      />
      <Route
        path="/gallery"
        element={
          <MainLayout>
            <GalleryPage />
          </MainLayout>
        }
      />
      <Route
        path="/reviews"
        element={
          <MainLayout>
            <TestimonialsPage />
          </MainLayout>
        }
      />
      <Route
        path="/book"
        element={
          <MainLayout>
            <AppointmentPage />
          </MainLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <MainLayout>
            <ContactPage />
          </MainLayout>
        }
      />
    </Routes>
  );
}