import { useState, useEffect } from "react";
import "../style.css"; 

const brandsData = [
  {
    id: "toyota",
    logo: "/brands/japanese/toyota.png",
    name: "Toyota",
    desc: "Reliable and fuel-efficient models — popular across Uganda.",
    cars: [
      { src: "/cars/toyota/harrier.jpg", label: "Harrier - efficient commuter" },
      { src: "/cars/toyota/rav4.jpg", label: "RAV4 - compact SUV" },
      { src: "/cars/toyota/landcruiser.jpg", label: "Land Cruiser - rugged & durable" },
      { src: "/cars/toyota/prius.jpg", label: "Prius - hybrid economy" },
      { src: "/cars/toyota/drone.jpg", label: "Hiace - spacious van" },
    ],
  },
  {
    id: "honda",
    logo: "/brands/japanese/honda.png",
    name: "Honda",
    desc: "Known for smooth engines and longevity.",
    cars: [
      { src: "/cars/honda/civic.jpg", label: "Civic — sport compact" },
      { src: "/cars/honda/accord.jpg", label: "Accord — family sedan" },
      { src: "/cars/honda/fitjaz.jpg", label: "Fit/Jazz — city hatch" },
      { src: "/cars/honda/crv.jpg", label: "CR-V — SUV" },
    ],
  },
  {
    id: "nissan",
    logo: "/brands/japanese/nissan.png",
    name: "Nissan",
    desc: "Practical models with good spare parts availability.",
    cars: [
      { src: "/cars/nissan/note.jpg", label: "Note — compact hatch" },
      { src: "/cars/nissan/x-trail.jpg", label: "X-Trail — family SUV" },
      { src: "/cars/nissan/teana.jpg", label: "Teana — city monster" },
      { src: "/cars/nissan/terrano.jpg", label: "Terrano — pickup/SUV" },
      { src: "/cars/nissan/leaf.jpg", label: "Leaf — electric option" },
    ],
  },
  {
    id: "subaru",
    logo: "/brands/japanese/subaru.png",
    name: "Subaru",
    desc: "Boxer engines and excellent all-wheel drive options.",
    cars: [
      { src: "/cars/subaru/impreza.jpg", label: "Impreza — rally-bred" },
      { src: "/cars/subaru/forester.jpg", label: "Forester — compact SUV" },
      { src: "/cars/subaru/outback.jpg", label: "Outback — crossover" },
      { src: "/cars/subaru/XV.jpg", label: "XV — coupe" },
      { src: "/cars/subaru/legacy.jpg", label: "Legacy — sedan" },
    ],
  },
  {
    id: "lexus",
    logo: "/brands/japanese/lexus.png",
    name: "Lexus",
    desc: "Premium vehicles with refined comfort and reliability.",
    cars: [
      { src: "/cars/lexus/IS.jpg", label: "IS — compact luxury" },
      { src: "/cars/lexus/RX.jpg", label: "RX — luxury SUV" },
      { src: "/cars/lexus/es.jpg", label: "ES — executive sedan" },
      { src: "/cars/lexus/nx.jpg", label: "NX — compact SUV" },
    ],
  },
];

export default function JapaneseCars() {
  const [lightboxSrc, setLightboxSrc] = useState("");
  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openLightbox = (src) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc("");
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main className="container">
      <h1>Japanese Cars</h1>
      <p style={{ color: "#6b7280" }}>
        Brands we import from Japan — click any image to view in full.
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

      {/* Floating WhatsApp Chat */}
      <a
        className="whatsapp-float"
        href="https://wa.me/256778348461"
        target="_blank"
        aria-label="Chat on WhatsApp"
        rel="noreferrer"
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