import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ViewUsers() {
  const [users, setUsers] = useState([]);
  const id = useParams();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      // Till the data is fetch using API
      // the Loading page will show.
      setLoading(true);

      // Await make wait until that
      // promise settles and return its result
      const response = await axios.get("http://localhost:5000/api/getUsers");

      // After fetching data stored it in posts state.
      setPosts(response.data);

      // Closed the loading page
      setLoading(false);
    };

    // Call the function
    loadPost();
  }, []);

  const LoadUser = async () => {
    const results = await axios.get(`http://localhost:5000/api/users/${id}`);
    setUsers(results.data);
  };
  // Delete Users
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/delete/user/${id}`);
    window.location.reload();
  };

  return (
    <div>
      <br />
      <center>
        {" "}
        <h5>Manage Users</h5>
      </center>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <h4>Loading...</h4>
          ) : (
            posts.map((item, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>
                  <a href={`edit/${item.id}`} className="btn btn-primary mx-2">
                    Edit
                  </a>
                  <button
                    onClick={() => deleteUser(item.id)}
                    className="btn btn-danger mx-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
