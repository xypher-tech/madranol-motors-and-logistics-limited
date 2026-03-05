const services = [
    {
      icon: "local_shipping",
      title: "Car Shipping & Importation",
      desc: "Full shipping from Hong Kong & Japan to Mombasa/Kampala with tracking and updates.",
    },
    {
      icon: "account_balance",
      title: "Clearance at Mombasa",
      desc: "Professional clearance handling ensuring fast release and minimized delays.",
    },
    {
      icon: "payments",
      title: "Delivery Payment Plans",
      desc: "Flexible installment plans and payment support to make owning a car easier.",
    },
    {
      icon: "build",
      title: "Car Servicing & Maintenance",
      desc: "Maintenance and inspection services to keep your car in top condition.",
    },
    {
      icon: "search",
      title: "Vehicle Sourcing",
      desc: "We help you find the right car within your budget and specification.",
    },
    {
      icon: "directions_car",
      title: "Car Hire in Uganda",
      desc: "Short and long-term hire options available for individuals and businesses.",
    },
  ];
  
  export default function Services() {
    return (
      <section id="services" className="section services">
        <div className="container">
          <h2>Services</h2>
          <div className="services-grid">
            {services.map((s, i) => (
              <article key={i} className="service-card">
                <span className="material-icons service-icon">{s.icon}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }