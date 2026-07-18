export default function Hero() {
  return (
    <section className="hero-section" id="hero-pin">
        <div className="hero-track">
             <div className="hero-start-screen">
                  <img src="/um-assets/logo_um_davao.png" alt="UM Logo" className="hero-center-logo" />
                  <div className="hero-center-text">UMERCH</div>
                  <div className="hero-center-sub">PREMIUM UM MERCHANDISE.</div>
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
