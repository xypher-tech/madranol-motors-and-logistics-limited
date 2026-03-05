export default function Hero() {
    return (
      <section id="home" className="hero">
        <div className="hero-inner container">
          <div className="hero-copy">
            <h1>Your trusted Partner in Car Shipping from Asia to Uganda</h1>
            <p className="sub">
              From Hong Kong & Japan to Kampala — Shipping, clearance & delivery
              made easy
            </p>
            <div className="hero-ctas">
              <button
                className="btn btn-primary"
                onClick={() =>
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View Services
              </button>
              <button
                className="btn btn-secondary"
                id="quoteCta"
                onClick={() =>
                  document.getElementById("name")?.focus()
                }
              >
                Get a Quote
              </button>
            </div>
            <ul className="hero-features">
              <li>7 years experience</li>
              <li>Trusted imports from Japan & Hong Kong</li>
              <li>Secure clearance & delivery</li>
            </ul>
          </div>
          <div className="hero-media" aria-hidden="true"></div>
        </div>
      </section>
    );
  }