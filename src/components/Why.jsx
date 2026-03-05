const OWNER_WA_NUMBER = "256778348461";

export default function Why() {
  const openWhatsApp = () =>
    window.open(`https://wa.me/${OWNER_WA_NUMBER}`, "_blank");

  return (
    <section id="why" className="section why">
      <div className="container">
        <div className="why-inner">
          <div className="why-copy">
            <h2>Why Choose Us</h2>
            <ul className="why-list">
              <li>
                <strong>Affordable instalment plans</strong> — Pay comfortably
                with our plans.
              </li>
              <li>
                <strong>Trusted Import Partner</strong> — Years of reliable
                imports.
              </li>
              <li>
                <strong>Secure Clearance & Delivery</strong> — We guarantee
                secure handling.
              </li>
              <li>
                <strong>Professional customer services</strong> — Responsive
                and helpful team.
              </li>
              <li>
                <strong>High quality cars</strong> — Carefully sourced from
                Japan & Hong Kong.
              </li>
            </ul>
            <button className="btn btn-whatsapp" onClick={openWhatsApp}>
              Chat on WhatsApp
            </button>
          </div>

          <div className="why-visual" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}