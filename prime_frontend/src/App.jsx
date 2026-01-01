import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import CertificationsPage from "./pages/CertificationsPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import RequestQuote from "./pages/RequestQuotePage";
import Error404Page from "./pages/Error404Page";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQPage from "./pages/FAQPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/request-quote" element={<RequestQuote />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQPage />} />

        {/* 404 Page */}
        <Route path="*" element={<Error404Page />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

