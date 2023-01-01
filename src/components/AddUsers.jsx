import React, { useState } from "react";
import "../assets/styles/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddUsers() {
  let navigate = useNavigate();
  const [users, setUsers] = useState({
    name: "",
    username: "",
    email: "",
  });
  const { name, username, email } = users;

  const onInputChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const SendToDb = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/addUser", users);
    navigate("/");
  };
  const Goback = () => {
    navigate("/");
  };
  return (
    <div>
      <br />
      <center>
        {" "}
        <h5> Register User</h5>
      </center>
      <form
        className="container"
        onSubmit={(e) => {
          SendToDb(e);
        }}
      >
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Username"
          value={username}
          name="username"
          required
          onChange={(e) => {
            onInputChange(e);
          }}
        />
        <br />
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Name"
          value={name}
          name="name"
          required
          onChange={(e) => {
            onInputChange(e);
          }}
        />
        <br />
        <label>Email Address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email Address"
          value={email}
          name="email"
          required
          onChange={(e) => {
            onInputChange(e);
          }}
        />
        <br />
        <center>
          {" "}
          <button className="btn btn-outline-primary">Submit</button>
          <button
            onClick={Goback}
            className="btn btn-outline-secondary"
            style={{ marginLeft: "20px" }}
          >
            Refresh
          </button>
        </center>
      </form>
    </div>
  );
}
