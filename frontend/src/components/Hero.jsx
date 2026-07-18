export default function Hero() {
  return (
    <section className="hero-section" id="hero-pin">
        <div className="hero-track">
             <div className="hero-aww-start">
                  {/* Top text removed as requested */}
                  
                  <div className="hero-aww-main">
                      <div className="hero-aww-logo-wrap">
                          <img src="/um-assets/logo_um_davao.png" alt="UM Logo" className="hero-aww-logo" />
                      </div>
                      <div className="hero-aww-letters">
                          <div className="hero-aww-char" data-char="U" style={{ "--char-index": 0 }}>U</div>
                          <div className="hero-aww-char" data-char="M" style={{ "--char-index": 1 }}>M</div>
                          <div className="hero-aww-char" data-char="E" style={{ "--char-index": 2 }}>E</div>
                          <div className="hero-aww-char" data-char="R" style={{ "--char-index": 3 }}>R</div>
                          <div className="hero-aww-char" data-char="C" style={{ "--char-index": 4 }}>C</div>
                          <div className="hero-aww-char" data-char="H" style={{ "--char-index": 5 }}>H</div>
                      </div>
                  </div>

                  <div className="hero-aww-bottom" style={{ justifyContent: "center" }}>
                      <div className="hero-aww-line">SCROLL TO UNVEIL</div>
                  </div>
             </div>
             
             <div className="hero-img-reveal">
                 <img src="/um-assets/umerch_hero_generated.jpg" alt="UMerch Hero" className="hero-bg-img" />
             </div>
             
             <div className="hero-fg-content">
                  <h1 className="hero-title">Carry UM with pride.</h1>
                  <p className="hero-sub">The new capsule collection.</p>
                  <a href="#" className="hero-btn">Shop new arrivals</a>
             </div>
        </div>
    </section>
  );
}
