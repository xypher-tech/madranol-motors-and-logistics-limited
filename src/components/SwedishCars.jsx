import { useState, useEffect } from "react";
import "../style.css"; 

const brandsData = [
  {
    id: "volvo",
    logo: "/brands/swedish/volvo.png",
    name: "Volvo",
    desc: "Safety-first vehicles with premium comfort.",
    cars: [
      { src: "/cars/volvo/s60.jpg", label: "S60 — sedan" },
      { src: "/cars/volvo/XC60.jpg", label: "XC90 — SUV" },
      { src: "/cars/volvo/V90.jpg", label: "V90 — estate" },
      { src: "/cars/volvo/S90.jpg", label: "S90 — executive" },
    ],
  },
];

export default function SwedishCars() {
  const [lightboxSrc, setLightboxSrc] = useState("");
  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openLightbox = (src) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc("");
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main className="container">
      <h1>Swedish Cars</h1>
      <p style={{ color: "#6b7280" }}>
        Trusted Swedish engineering available through our imports — click any image to view in full.
      </p>

      {brandsData.map((brand) => (
        <section className="brand" id={brand.id} key={brand.id}>
          <div className="brand-logo">
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(brand.logo)}
            />
          </div>
          <div className="brand-body">
            <h2>{brand.name}</h2>
            <p>{brand.desc}</p>
            <div className="gallery">
              {brand.cars.map((car, i) => (
                <div
                  className="card"
                  key={i}
                  style={{ cursor: "pointer" }}
                  onClick={() => openLightbox(car.src)}
                >
                  <img src={car.src} alt={car.label} />
                  <small>{car.label}</small>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

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

      {/* Scroll-to-top */}
      <button
        className={`scroll-top ${scrollVisible ? "show" : ""}`}
        onClick={scrollTop}
        aria-label="Scroll to top"
      >
        <span className="material-icons">arrow_upward</span>
      </button>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          id="lightbox"
          onClick={closeLightbox}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "pointer",
          }}
        >
          <img
            src={lightboxSrc}
            alt="Car full view"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
              boxShadow: "0 0 15px rgba(255,255,255,0.2)",
              pointerEvents: "none",
            }}
          />
        </div>
      )}
    </main>
  );
}