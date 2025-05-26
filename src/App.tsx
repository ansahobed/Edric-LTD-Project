import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Admin pages
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import AdminDashboard from './pages/admin/index';
import AdminProperties from './pages/admin/properties';
import AdminBoats from './pages/admin/boats';
import AdminProjects from './pages/admin/projects';
import AdminInvestors from './pages/admin/investors';

// Public project overview
import ProjectOverview from './pages/projects/[id]';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* Add pt-24 (or adjust to pt-28 if your header is taller) */}
        <main className="flex-grow pt-24">
          <Routes>
            {/* Public pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/properties/:id" element={<PropertyDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects/:id" element={<ProjectOverview />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Admin auth + dashboard */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/properties" element={<AdminProperties />} />
            <Route path="/admin/boats" element={<AdminBoats />} />
            <Route path="/admin/projects" element={<AdminProjects />} />
            <Route path="/admin/investors" element={<AdminInvestors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
