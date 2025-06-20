import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy loading des pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const RestaurantPage = React.lazy(() => import('./pages/RestaurantPage'));
const HotelPage = React.lazy(() => import('./pages/HotelPage'));
import BarPage from './pages/BarPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import FloatingReservation from './components/FloatingReservation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<div className="flex justify-center items-center h-64">Chargement...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurant" element={<RestaurantPage />} />
            <Route path="/hotel" element={<HotelPage />} />
            <Route path="/bar" element={<BarPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
        <FloatingReservation />
        <Footer />
      </div>
    </Router>
  );
}

export default App;