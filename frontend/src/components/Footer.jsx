import '../styles/Footer.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-address">
        <p>
          <FaMapMarkerAlt />
          Valle dorado, valle de los sirios,<br /> Ensenada, Baja California
        </p>
      </div>
      <hr className="footer-divider" />
      <div className="footer-contact">
        <div>
          <p>
            <FaPhoneAlt /> +52 646 256 3625
          </p>
        </div>
        <div>
          <p>
            <FaRegEnvelope size={16} className="icon-spacing" /> doctor@consultoriomx.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
