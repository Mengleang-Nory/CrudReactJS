import React from "react";

const Popup = ({
  trigger,
  action,
  nameDetail,
  contactDetail,
  heandleCancel,
  heandleAction,
}) => {
  return trigger ? (
    <div className="popup">
      <div className="popup-container">
        <div className="popup-content">
          <div>
            <h3>{action} Detail : </h3>
            <p>{nameDetail}</p>
            <p>{contactDetail}</p>
          </div>
          <div className="popup-btn">
            <button className="btn btn-update" onClick={heandleCancel}>
              Cancel
            </button>
            <button className="btn btn-delete" onClick={heandleAction}>
              {action}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
