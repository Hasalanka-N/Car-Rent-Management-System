import '../styles/SriLankaMap.css';

function SriLankaMap() {
  return (
    <div className="map-container">
     <img src="/image/lk.svg" alt="Sri Lanka Map" className="map-image" />


      <div className="marker" style={{ top: '67%', left: '36%' }}>🚩Colombo</div>
      <div className="marker" style={{ top: '30%', left: '70%' }}>🚩Trincomalee</div>
      <div className="marker" style={{ top: '90%', left: '55%' }}>🚩Galle</div>
    </div>
  );
}

export default SriLankaMap;
