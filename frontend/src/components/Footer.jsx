export default function Footer() {
  return (
    <footer className="footer-fixed">
        <div className="footer-silhouette">
            <img src="/um-assets/umerch_hero_generated.jpg" alt="Silhouette Background" />
        </div>
        
        <div className="footer-content">
            <div className="footer-links-row">
                <div className="f-col f-logo-col">
                    <img src="/um-assets/University_of_Mindanao_Logo.png" alt="UM Logo" className="footer-logo" />
                    <p className="footer-logo-text">University of Mindanao<br/>Premium Gear</p>
                </div>
                <div className="f-col">
                    <h4>SHOP</h4>
                    <a href="#">Apparel</a>
                    <a href="#">Accessories</a>
                    <a href="#">New Arrivals</a>
                </div>
                <div className="f-col">
                    <h4>INFO</h4>
                    <a href="#">About UM</a>
                    <a href="#">Sustainability</a>
                    <a href="#">Contact</a>
                </div>
                <div className="f-col">
                    <h4>SOCIAL</h4>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                    <a href="#">TikTok</a>
                </div>
            </div>
            
            <div className="footer-huge-monogram">UMERCH</div>
            
            <div className="footer-bottom-bar">
                <span>© 2026 UNIVERSITY OF MINDANAO MERCHANDISE</span>
                <span>DESIGNED WITH PRIDE</span>
            </div>
        </div>
    </footer>
  );
}
