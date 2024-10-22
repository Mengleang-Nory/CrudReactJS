import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Popup from "../components/Popup";

const Update = () => {
  const { id } = useParams();
  const [data, setData] = React.useState(null);
  const [btnPopup, setBtnPopup] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch("http://localhost:3000/users/" + id)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [id]);

  const [name, setName] = React.useState("");
  const [contact, setContact] = React.useState("");

  React.useEffect(() => {
    if (data) {
      setName(data.name);
      setContact(data.contact);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, contact };

    fetch("http://localhost:3000/users/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <Layouts>
      <div className="create">
        <h2>Update User : {id}</h2>
        <form onSubmit={(e)=>e.preventDefault()}>
          <label>Old User's Name : {data && data.name}</label>
          <label>New User Name : </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Old User's Contact : {data && data.contact}</label>
          <label>New Contact : </label>
          <input
            type="text"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <button onClick={() => setBtnPopup(true)}>Update User</button>

          <Popup
            trigger={btnPopup}
            action={"Update"}
            nameDetail={`From ${data?.name} to ${name}`}
            contactDetail={"From " + (data && data.contact) + " to " + contact}
            heandleCancel={() => setBtnPopup(false)}
            heandleAction={handleSubmit}
          ></Popup>
        </form>
      </div>
    </Layouts>
  );
};

export default Update;

// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Layouts from "../layouts/Layouts";
// import Popup from "../components/Popup";

// const Update = () => {
//   const { id } = useParams();
//   const [data, setData] = React.useState(null);
//   const [btnPopup, setBtnPopup] = React.useState(false);
//   const navigate = useNavigate();

//   React.useEffect(() => {
//     fetch("http://localhost:3000/users/" + id)
//       .then((res) => {
//         if (!res.ok) {
//           throw Error("Could not fetch the data for that resource");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setData(data);
//       });
//   }, [id]);

//   // Initialize name and contact as empty strings
//   const [name, setName] = React.useState("");
//   const [contact, setContact] = React.useState("");

//   // Update name and contact once data is fetched
//   React.useEffect(() => {
//     if (data) {
//       setName(data.name);
//       setContact(data.contact);
//     }
//   }, [data]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const user = { name, contact };

//     fetch("http://localhost:3000/users/" + id, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(user),
//     }).then(() => {
//       navigate("/");
//     });
//   };

//   return (
//     <Layouts>
//       <div className="create">
//         <h2>Update User : {id}</h2>

//         <label>Old User's Name : {data && data.name}</label>
//         <label>New User Name : </label>
//         <input
//           type="text"
//           required
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <label>Old User's Contact : {data && data.contact}</label>
//         <label>New Contact : </label>
//         <input
//           type="text"
//           required
//           value={contact}
//           onChange={(e) => setContact(e.target.value)}
//         />
//         <button onClick={() => setBtnPopup(true)}>Update User</button>
//         <Popup
//           trigger={btnPopup}
//           action={"Update"}
//           nameDetail={`From ${data?.name} to ${name}`}
//           contactDetail={`From ${data?.contact} to ${contact}`}
//           handleCancel={() => setBtnPopup(false)}
//           handleAction={handleSubmit}
//         ></Popup>
//       </div>
//     </Layouts>
//   );
// };

// export default Update;
