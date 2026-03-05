const brands = [
    { name: "Japanese Cars", link: "/japanese" },
    { name: "Korean Cars", link: "/korean" },
    { name: "Swedish Cars", link: "/swedish" },
    { name: "American Cars", link: "/american" },
  ];
  
  export default function Brands() {
    return (
      <section id="brands" className="section brands">
        <div className="container">
          <h2>Brand Gallery</h2>
          <p>Explore cars we import from different regions around the world.</p>
  
          <ul className="brand-list">
            {brands.map((b, i) => (
              <li key={i}>
                <a href={b.link}>{b.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }