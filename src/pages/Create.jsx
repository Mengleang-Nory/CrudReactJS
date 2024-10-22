import React from "react";
import Layouts from "../layouts/Layouts";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    const day = String(date.getDate()).padStart(2, "0"); // Get day and pad with zero
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month (0-11) and pad with zero
    const year = date.getFullYear(); // Get full year
    const hours = String(date.getHours()).padStart(2, "0"); // Get hours and pad with zero
    const minutes = String(date.getMinutes()).padStart(2, "0"); // Get minutes and pad with zero
    const seconds = String(date.getSeconds()).padStart(2, "0"); // Get seconds and pad with zero

    return `${day}:${month}:${year}:${hours}:${minutes}:${seconds}`; // Return formatted date-time
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, contact };

    fetch("http://localhost:3000/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      navigate("/");
      console.log(formatDateTime(currentTime));
    });
  };

  return (
    <Layouts>
      <div className="create">
        <h2>Add a New User</h2>
        <form onSubmit={handleSubmit}>
          <label>User Name : </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Contact : </label>
          <input
            type="text"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <button>Add User</button>
        </form>
      </div>
    </Layouts>
  );
};

export default Create;
