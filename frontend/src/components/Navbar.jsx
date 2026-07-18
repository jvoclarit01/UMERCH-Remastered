import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <>
      <nav className={`invisible-split-nav ${isOpen ? 'menu-open' : ''}`}>
          <div className="nav-left">
              <img src="/um-assets/University_of_Mindanao_Logo.png" alt="UM Tagum Seal" className="nav-img" />
              <span className="nav-brand">UMERCH</span>
          </div>
          <div className="nav-right">
              <a href="#" className="desktop-link">Collection</a>
              <a href="#" className="desktop-link">Editorial</a>
              <span className="nav-cart-text">Cart (0)</span>
              
              <button 
                  className={`hamburger-btn ${isOpen ? 'open' : ''}`} 
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle Menu"
              >
                  <span className="line line-1"></span>
                  <span className="line line-2"></span>
              </button>
          </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div className={`menu-overlay ${isOpen ? 'active' : ''}`}>
          <div className="menu-inner">
              <div className="menu-links">
                  <a href="#" style={{'--delay': '0.1s'}} onClick={() => setIsOpen(false)}>Collection</a>
                  <a href="#" style={{'--delay': '0.2s'}} onClick={() => setIsOpen(false)}>Editorial</a>
                  <a href="#" style={{'--delay': '0.3s'}} onClick={() => setIsOpen(false)}>About Us</a>
                  <a href="#" style={{'--delay': '0.4s'}} onClick={() => setIsOpen(false)}>Contact</a>
              </div>
              <div className="menu-footer" style={{'--delay': '0.5s'}}>
                  <span>© 2026 UMERCH.</span>
                  <span>PREMIUM UM MERCHANDISE</span>
              </div>
          </div>
      </div>
    </>
  );
}
