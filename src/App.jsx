import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Why from "./components/Why";
import Brands from "./components/Brands";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import JapaneseCars from "./components/JapaneseCars";
import AmericanCars from "./components/AmericanCars";
import KoreanCars from "./components/KoreanCars";
import SwedishCars from "./components/SwedishCars";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <About />
              <Services />
              <Why />
              <Brands />
              <Registration />
              <Contact />
              <Footer />
              <ScrollTop />
            </>
          }
        />

        {/* Car Pages */}
        {[
          { path: "/japanese", Component: JapaneseCars },
          { path: "/american", Component: AmericanCars },
          { path: "/korean", Component: KoreanCars },
          { path: "/swedish", Component: SwedishCars },
        // eslint-disable-next-line no-unused-vars
        ].map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>

      {/* Floating WhatsApp */}
      <a
        className="whatsapp-float"
        href="https://wa.me/256778348461"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="label">WhatsApp Me</span>
      </a>
    </Router>
  );
}