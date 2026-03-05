import { useState, useEffect } from "react";
import "../style.css"; 

const brandsData = [
  {
    id: "hyundai",
    logo: "/brands/korean/hyundai.png",
    name: "Hyundai",
    desc: "Popular, affordable, and widely serviced.",
    cars: [
      { src: "/cars/hyundai/electra.jpg", label: "Elantra — sedan" },
      { src: "/cars/hyundai/tucson.jpg", label: "Tucson — SUV" },
      { src: "/cars/hyundai/ff.jpg", label: "Santa Fe — family SUV" },
      { src: "/cars/hyundai/accent.jpg", label: "Accent — compact" },
    ],
  },
  {
    id: "kia",
    logo: "/brands/korean/kia.png",
    name: "Kia",
    desc: "Stylish models with competitive warranties.",
    cars: [
      { src: "/cars/kia/sportage.jpg", label: "Sportage — SUV" },
      { src: "/cars/kia/rio.jpg", label: "Rio — compact" },
      { src: "/cars/kia/cerato.jpg", label: "Cerato — sedan" },
      { src: "/cars/kia/seltos.jpg", label: "Seltos — crossover" },
    ],
  },
];

export default function KoreanCars() {
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
      <h1>Korean Cars</h1>
      <p style={{ color: "#6b7280" }}>
        Imported Korean brands we handle — click any image to view in full.
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