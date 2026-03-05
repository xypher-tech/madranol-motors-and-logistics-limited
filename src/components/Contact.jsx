const OWNER_WA_NUMBER = "256778348461";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = encodeURIComponent(e.target.name.value);
    const phone = encodeURIComponent(e.target.phone.value);
    const cartype = encodeURIComponent(e.target.cartype.value);
    const message = encodeURIComponent(e.target.message.value);
    const waUrl = `https://wa.me/${OWNER_WA_NUMBER}?text=Hello, I am ${name} (${phone}). I am interested in: ${cartype}. Message: ${message}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Contact Us</h2>

        <div className="contact-grid">
          <div className="contact-form-wrap">
            <form onSubmit={handleSubmit} className="inquiry-form">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="name">Name</label>
                    </td>
                    <td>
                      <input type="text" id="name" name="name" required minLength="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="phone">Phone</label>
                    </td>
                    <td>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        pattern="[+0-9\s-]{7,}"
                        placeholder="e.g. +256 7xx xxx xxx"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="cartype">Car type</label>
                    </td>
                    <td>
                      <input type="text" id="cartype" name="cartype" required />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="message">Message</label>
                    </td>
                    <td>
                      <textarea id="message" name="message" rows="4" required></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="form-actions">
                      <button type="submit" className="btn btn-primary">
                        Send via WhatsApp
                      </button>
                      <button type="reset" className="btn btn-ghost">
                        Reset
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>

          <aside className="contact-info">
            <h3>Get in touch</h3>
            <p>
              <span className="material-icons small">location_on</span> Office: Kampala — Uganda
            </p>
            <p>
              <span className="material-icons small">phone</span>{" "}
              <a href="tel:+256741393600">+256 741 393 600</a>
            </p>
            <p>
              <span className="material-icons small">chat</span>{" "}
              <a href={`https://wa.me/${OWNER_WA_NUMBER}`} target="_blank" rel="noreferrer">
                WhatsApp Owner
              </a>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}