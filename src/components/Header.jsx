import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef();

  // Closing the nav on outside [click or scroll]
  useEffect(() => {
    const handleClick = (e) => {
      if (navOpen && navRef.current && !navRef.current.contains(e.target)) {
        setNavOpen(false);
      }
    };
    const handleScroll = () => setNavOpen(false);

    document.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navOpen]);

  return (
    <header className={`site-header ${navOpen ? "nav-open" : ""}`}>
      <div className="container nav-container" ref={navRef}>
        <a className="logo" href="#">
          Madranol Motors & Logistics Limited
        </a>
        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#why">Why Choose Us</a>
          <a href="#brands">Brand Gallery</a>
          <a href="#registration">C.O.R</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-ctas">
          <button
            className="btn btn-quote"
            onClick={() =>
              document
                .getElementById("quoteCta")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Get a Quote
          </button>
          <button
            className="btn btn-services"
            onClick={() =>
              document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View Services
          </button>
        </div>
        <button
          className="nav-toggle"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation"
        >
          <span className="material-icons">menu</span>
        </button>
      </div>
    </header>
  );
}