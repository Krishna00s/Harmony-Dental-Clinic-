import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { PageWrapper } from './components/layout/PageWrapper';

// Page Views
import { HomePage } from './pages/Home/HomePage';
import { PracticePage } from './pages/Practice/PracticePage';
import { ServicesPage } from './pages/Services/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetail/ServiceDetailPage';
import { DoctorPage } from './pages/Doctor/DoctorPage';
import { PatientInfoPage } from './pages/PatientInfo/PatientInfoPage';
import { AboutPage } from './pages/About/AboutPage';
import { ReviewsPage } from './pages/Reviews/ReviewsPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { BookAppointmentPage } from './pages/BookAppointment/BookAppointmentPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#F7F7F4] text-[#17221F] selection:bg-[#526E68] selection:text-white">
        <Header />
        <main className="flex-grow">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/practice" element={<PracticePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/doctor" element={<DoctorPage />} />
              <Route path="/patient-info" element={<PatientInfoPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/book-appointment" element={<BookAppointmentPage />} />
              {/* Catch-all fallback */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </PageWrapper>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
