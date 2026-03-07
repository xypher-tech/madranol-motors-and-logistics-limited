export default function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h4>Madranol Motors UG</h4>
            <p>Car importation + Shipping + clearance + delivery + extra services.</p>
          </div>
  
          <div>
            <h4>Quick links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
  
          <div>
            <h4>Follow us</h4>
            <div className="social-media">
              <a href="https://www.tiktok.com/@mardranolmotorsuganda" target="_blank" rel="noreferrer" className="social-item">
                <img src="/images/tiktok.png" alt="TikTok"/>
                <span>TikTok</span>
              </a>
              <a href="https://youtube.com/@mardra-ug?si=wPhQI5-3_teHtg7c" target="_blank" rel="noreferrer" className="social-item">
                <img src="/images/youtube.png" alt="YouTube"/>
                <span>YouTube</span>
              </a>
            </div>
            <p className="location"><span className="material-icons small">location_on</span> Kampala, Uganda</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {year} Madranol Motors UG. All rights reserved.</p>
        </div>
      </footer>
    );
  }