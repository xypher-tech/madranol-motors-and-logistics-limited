import { useState, useEffect } from "react";
import "../style.css"; 

const brandsData = [
  {
    id: "ford",
    logo: "/brands/american/ford.png",
    name: "Ford",
    desc: "Strong trucks and family SUVs.",
    cars: [
      { src: "/cars/ford/f150.jpg", label: "F-150 — pickup" },
      { src: "/cars/ford/ranger.jpg", label: "Ranger — midsize truck" },
      { src: "/cars/ford/mustang.jpg", label: "Mustang — sports coupe" },
      { src: "/cars/ford/escape.jpg", label: "Escape — crossover" },
    ],
  },
  {
    id: "gmc",
    logo: "/brands/american/gmc.png",
    name: "GMC",
    desc: "Premium trucks & utility vehicles.",
    cars: [
      { src: "/cars/gmc/sierra.jpg", label: "Sierra — truck" },
      { src: "/cars/gmc/terrain.jpg", label: "Terrain — compact SUV" },
      { src: "/cars/gmc/acadia.jpg", label: "Acadia — crossover" },
      { src: "/cars/gmc/canyon.jpg", label: "Canyon — midsize truck" },
    ],
  },
  {
    id: "jeep",
    logo: "/brands/american/jeep.png",
    name: "Jeep",
    desc: "Off-road capable SUVs and rugged designs.",
    cars: [
      { src: "/cars/jeep/wrangler.jpg", label: "Wrangler — off-road" },
      { src: "/cars/jeep/cherokee.jpg", label: "Cherokee — SUV" },
      { src: "/cars/jeep/grand.jpg", label: "Grand Cherokee — premium SUV" },
      { src: "/cars/jeep/compass.jpg", label: "Compass — compact" },
    ],
  },
  {
    id: "dodge",
    logo: "/brands/american/dodge.png",
    name: "Dodge",
    desc: "Muscle cars and performance-focused models.",
    cars: [
      { src: "/cars/dodge/charger.jpg", label: "Charger — muscle sedan" },
      { src: "/cars/dodge/challenger.jpg", label: "Challenger — coupe" },
      { src: "/cars/dodge/journey.jpg", label: "Journey — family SUV" },
      { src: "/cars/dodge/ramcharger.jpg", label: "Ramcharger — classic" },
    ],
  },
  {
    id: "chevrolet",
    logo: "/brands/american/Chevrolet.png",
    name: "Chevrolet",
    desc: "Wide lineup from compact cars to heavy-duty trucks.",
    cars: [
      { src: "/cars/chevrolet/silverdo.jpg", label: "Silverado — pickup" },
      { src: "/cars/chevrolet/camaro.jpg", label: "Camaro — sports" },
      { src: "/cars/chevrolet/trailblazer.jpg", label: "Trailblazer — SUV" },
      { src: "/cars/chevrolet/equinox.jpg", label: "Equinox — crossover" },
    ],
  },
  {
    id: "ram",
    logo: "/brands/american/ram.png",
    name: "RAM",
    desc: "Heavy-duty and premium pickup trucks.",
    cars: [
      { src: "/cars/ram/1500.jpg", label: "1500 — light-duty" },
      { src: "/cars/ram/2500.jpg", label: "2500 — heavy-duty" },
      { src: "/cars/ram/3500.jpg", label: "3500 — commercial" },
      { src: "/cars/ram/trx.jpg", label: "TRX — performance truck" },
    ],
  },
];

export default function AmericanCars() {
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
      <h1>American Cars</h1>
      <p style={{ color: "#6b7280" }}>
        Classic American brands — trucks, SUVs and performance cars. Click any image to view in full.
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