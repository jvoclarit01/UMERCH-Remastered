export default function Catalogue() {
  return (
    <div className="scene-3">
        <div className="horizontal-track">
            
            <div className="h-panel">
                <div className="h-panel-content">
                    <div className="h-text">WEAR<br/>YOUR<br/><span>PRIDE</span></div>
                    <div className="h-img-container">
                        <img src="/um-assets/umshert.png" alt="Apparel" className="floating-img" />
                    </div>
                </div>
            </div>
            
            <div className="h-panel">
                <div className="h-panel-content">
                    <div className="h-img-container" style={{flex:1}}>
                        <img src="/um-assets/um totebag.jpg" alt="Totebag" className="floating-img-2" />
                    </div>
                    <div className="h-text" style={{textAlign:'right'}}>EVERYDAY<br/>CARRY<br/><span>GEAR</span></div>
                </div>
            </div>

            <div className="h-panel" style={{justifyContent: 'center', background: 'var(--white)'}}>
                <div className="h-text" style={{color: 'var(--black)', textAlign: 'center', fontSize: '8vw'}}>
                    <img src="/um-assets/logo_um_davao.png" alt="UM Tagum Seal" style={{height: '120px', width: '120px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 2rem', display: 'block'}} />
                    THE CATALOGUE
                </div>
            </div>

        </div>
    </div>
  );
}
