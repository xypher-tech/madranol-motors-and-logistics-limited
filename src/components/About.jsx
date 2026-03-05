import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { useSpring, animated } from "@react-spring/web";

const images = [
  "/images/car1.jpeg",
  "/images/car2.jpeg",
  "/images/car3.jpeg",
  "/images/car4.jpeg",
];

export default function About() {
  const [index, setIndex] = useState(0);

  const props = useSpring({
    transform: `translateX(-${index * 100}%)`,
    config: { duration: 900 },
  });

  // auto-sliding every 3.8s
  setTimeout(() => setIndex((prev) => (prev + 1) % images.length), 3800);

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2>About Us</h2>
        <div className="about-grid">
          <div className="about-text">
            <h3>Who Madranol is</h3>
            <p>
              Madranol Motors is a Kampala-based car importation partner
              specializing in shipping vehicles from Hong Kong and Japan and
              handling clearance, delivery and after-sales support with
              transparency and care.
            </p>

            <h3>Mission & Vision</h3>
            <p>
              Mission: To provide transparent, affordable and trusted car
              importation services that connect Ugandan buyers with high-quality
              vehicles from Asia.
              <br />
              Vision: To be Uganda's most trusted and accessible vehicle import
              partner.
            </p>

            <h3>Experience & Expertise</h3>
            <p>
              With 7 years of experience, our team handles sourcing, shipping,
              Mombasa clearance and delivery across Uganda.
            </p>
          </div>

          <div className="about-carousel">
            <animated.div
              className="carousel-track"
              style={{ ...props, display: "flex" }}
            >
              {images.map((src, i) => (
                <img key={i} src={src} alt={`Slide ${i + 1}`} />
              ))}
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
}