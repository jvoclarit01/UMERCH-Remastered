export default function Catalogue() {
  return (
    <div className="scene-3">
        <div className="horizontal-track">
            
            {/* Panel 1 - Dark Mode */}
            <div className="h-panel panel-dark">
                <div className="h-bg-text">WEAR YOUR PRIDE</div>
                <div className="h-panel-content">
                    <div className="h-text">WEAR<br/>YOUR<br/><span>PRIDE</span></div>
                    <div className="h-img-container">
                        <img src="/um-assets/umshert.png" alt="Apparel" className="floating-img h-img-main" />
                    </div>
                </div>
            </div>
            
            {/* Panel 2 - Red Mode */}
            <div className="h-panel panel-red">
                <div className="h-bg-text outline-text">EVERYDAY CARRY</div>
                <div className="h-panel-content">
                    <div className="h-img-container" style={{flex:1}}>
                        <img src="/um-assets/um totebag.jpg" alt="Totebag" className="floating-img-2 h-img-main" />
                    </div>
                    <div className="h-text" style={{textAlign:'right'}}>EVERYDAY<br/>CARRY<br/><span>GEAR</span></div>
                </div>
            </div>

            {/* Panel 3 - Light Mode */}
            <div className="h-panel panel-light">
                <div className="h-bg-text outline-text-dark">THE CATALOGUE</div>
                <div className="h-panel-content centered-panel">
                    <div className="catalog-finale">
                        <img src="/um-assets/University_of_Mindanao_Logo.png" alt="UM Tagum Seal" className="finale-logo" />
                        <h2 className="finale-text">THE<br/>CATALOGUE</h2>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}
