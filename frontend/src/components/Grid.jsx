export default function Grid() {
  return (
    <>
      <section className="shop-section">
          <div className="section-header">
              <h2 className="section-title">NEW<br/>ARRIVALS</h2>
              <div className="shop-all">VIEW ALL PRODUCTS →</div>
          </div>

          <div className="shop-grid">
              <div className="product-card">
                  <img src="/um-assets/tshirt.jpg" alt="UM T-Shirt" className="product-img" />
                  <div className="product-info">
                      <div className="product-name">UM Essential Tee</div>
                      <div className="product-price">₱350</div>
                  </div>
              </div>
              
              <div className="product-card">
                  <img src="/um-assets/mug.png" alt="UM Mug" className="product-img" />
                  <div className="product-info">
                      <div className="product-name">Classic Ceramic Mug</div>
                      <div className="product-price">₱150</div>
                  </div>
              </div>

              <div className="product-card">
                  <img src="/um-assets/um totebag.jpg" alt="Tote Bag" className="product-img" />
                  <div className="product-info">
                      <div className="product-name">Canvas Tote Bag</div>
                      <div className="product-price">₱250</div>
                  </div>
              </div>

              <div className="product-card">
                  <img src="/um-assets/pillow.png" alt="UM Pillow" className="product-img" />
                  <div className="product-info">
                      <div className="product-name">Comfort Pillow</div>
                      <div className="product-price">₱300</div>
                  </div>
              </div>
              
              <div className="product-card">
                  <img src="/um-assets/tumbler wood.jpg" alt="Tumbler" className="product-img" />
                  <div className="product-info">
                      <div className="product-name">Wood Finish Tumbler</div>
                      <div className="product-price">₱450</div>
                  </div>
              </div>
              
              <div className="product-card">
                  <img src="/um-assets/nutbook.png" alt="Notebook" className="product-img" />
                  <div className="product-info">
                      <div className="product-name">Premium Notebook</div>
                      <div className="product-price">₱120</div>
                  </div>
              </div>
          </div>
      </section>
      
      <section className="feature-section">
          <img src="/um-assets/um4.jpg" alt="Students with Merch" className="feature-img" />
          <div className="feature-content">
              <h3>MADE FOR<br/>THE COMMUNITY</h3>
              <p>Our merchandise is designed to represent the spirit and excellence of the university. From everyday apparel to premium study essentials, each piece is crafted with quality and pride.</p>
              <a href="#" className="btn">Shop The Lookbook</a>
          </div>
      </section>
    </>
  );
}
