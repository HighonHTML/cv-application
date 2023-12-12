import "../stylesheets/displayGeneral.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function DisplayGeneral({ generalData }) {
  return (
    <div className="general-section">
      <h2>{generalData.name}</h2>
      <div className="general-info">
        <div id="display-email">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>{generalData.email}</p>
        </div>
        <div id="display-phone">
          <FontAwesomeIcon icon={faPhone} />
          <p>{generalData.phoneNumber}</p>
        </div>
        <div id="display-location">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>India</p>
        </div>
      </div>
    </div>
  );
}
