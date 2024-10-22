import React from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup";

const Lists = ({ id, name, contact }) => {
  const [btnPopup, setBtnPopup] = React.useState(false);
  const handleDelete = () => {
    console.log(id);
    fetch("http://localhost:3000/users/" + id, {
      method: "DELETE",
    }).then(() => {
      // alert("successfully");
    });
  };

  return (
    <div>
      <div className="blog-preview">
        <div>
          <p>ID : {id}</p>
          <h2>Name : {name}</h2>
          <p>Contact : {contact}</p>
        </div>
        <div className="btn-side">
          <Link to={`/update/${id}`}>
            <button className="btn btn-update">Update</button>
          </Link>
          <button className="btn btn-delete" onClick={() => setBtnPopup(true)}>
            Delete
          </button>
          <Popup
            trigger={btnPopup}
            action={"Delete"}
            nameDetail={"User's name : " + name}
            contactDetail={"User's contact : " + contact}
            heandleCancel={() => setBtnPopup(false)}
            heandleAction={handleDelete}
          ></Popup>
        </div>
      </div>
    </div>
  );
};

export default Lists;
