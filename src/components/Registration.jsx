export default function Registration() {
    return (
        <section id="registration" className="section registration">
            <div className="container">
                <h2>Registration Status</h2>
                <div className="registration-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
                    <div className="registration-text" style={{ textAlign: "center", maxWidth: "700px" }}>
                        <p>
                            Madranol Motors & Logistics Limited is a fully registered and recognized business under the Uganda Registration Services Bureau (URSB). We operate legally and transparently, ensuring every client works with a trusted and certified importation partner.
                        </p>
                        <p>
                            <strong>URSB Certificate of Registration:</strong> Proof of our commitment to compliance and professionalism.
                        </p>
                    </div>
                    <div className="registration-image">
                        <img 
                            src="/images/REGISTRATION_CERTIFICATE.jpg" 
                            alt="URSB Certificate of Registration"
                            style={{
                                maxWidth: "400px",
                                width: "100%",
                                height: "auto",
                                borderRadius: "10px",
                                border: "3px solid black",
                                transition: "transform 0.3s ease-in-out",
                                display: "block",
                                margin: "0 auto",
                            }}
                            className="certificate-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
  }