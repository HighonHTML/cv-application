import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function ManageTemplate({ clearForm, resetForm }) {
  return (
    <div className="manage-template">
      <div className="clear-resume" onClick={clearForm}>
        <FontAwesomeIcon icon={faTrash} />
        <p>Clear Resume</p>
      </div>
      <div className="reset" onClick={resetForm}>
        Reset
      </div>
    </div>
  );
}
