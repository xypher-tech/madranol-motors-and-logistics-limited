const OWNER_WA_NUMBER = "256778348461";

export default function WhatsappFloat() {
  const openWhatsApp = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/${OWNER_WA_NUMBER}`, "_blank");
  };

  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${OWNER_WA_NUMBER}`}
      aria-label="Chat on WhatsApp"
      onClick={openWhatsApp}
    >
      <span className="material-icons">whatsapp</span>
      <span className="label">WhatsApp Me</span>
    </a>
  );
}