import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/delete/${id}`)
      .then((res) => {
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-70 bg-white rounded p-3 ">
        <h2>Artist List</h2>
        <div className="d-flex justify-content-end">
          <Link to={"/create"} className="btn btn-success">
            Create
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Band ID</th>
              <th>Contact Number</th>
              <th>Organizer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((artist, index) => {
              return (
                <tr key={index}>
                  <td>{artist.Artist_ID}</td>
                  <td>{artist.Artist_FirstName}</td>
                  <td>{artist.Artist_LastName}</td>
                  <td>{artist.Artist_Email}</td>
                  <td>{artist.Artist_Band_ID}</td>
                  <td>{artist.Artist_Contact_No}</td>
                  <td>{artist.Organizer_ID}</td>
                  <td>
                    <Link
                      to={`/view/${artist.Artist_ID}`}
                      className="btn btn-sm btn-infc"
                    >
                      View
                    </Link>
                    <Link
                      to={`/edit/${artist.Artist_ID}`}
                      className="btn btn-sm btn-infc"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        handleDelete(artist.Artist_ID);
                      }}
                      className="btn btn-sm btn-infc"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
