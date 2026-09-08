import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteLoader from "./components/RouteLoader";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/Home";
import ServicesPage from "./pages/Services";
import CompanyPage from "./pages/Company";
import WorkPage from "./pages/Work";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <RouteLoader />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
