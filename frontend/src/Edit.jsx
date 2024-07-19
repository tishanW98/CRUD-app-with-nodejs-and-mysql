import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [artist, setArtist] = useState({
    // Artist_ID: artist.Artist_ID,
    // Artist_FirstName: artist.Artist_FirstName,
    // Artist_LastName: artist.Artist_LastName,
    // Artist_Email: artist.Artist_Email,
    // Artist_Band_ID: artist.Artist_Band_ID,
    // Artist_Contact_No: artist.Artist_Contact_No,
    // Organizer_ID: artist.Organizer_ID,
    Artist_ID: "",
    Artist_FirstName: "",
    Artist_LastName: "",
    Artist_Email: "",
    Artist_Band_ID: "",
    Artist_Contact_No: "",
    Organizer_ID: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/view/${id}`)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setArtist(res.data[0]);
        } else {
          setArtist({});
        }
      })
      .catch((err) => {
        console.log(err);
        setArtist({});
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtist((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/edit/${id}`, artist)
      .then((res) => {
        console.log(res);
        console.log("Form submitted", artist);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setArtist({});
      });
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
      <div className="w-50 bg-white rounded p-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control mb-3"
              name="Artist_ID"
              value={artist.Artist_ID}
              onChange={handleChange}
              placeholder="Artist ID"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control mb-3"
              name="Artist_FirstName"
              value={artist.Artist_FirstName}
              onChange={handleChange}
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control mb-3"
              name="Artist_LastName"
              value={artist.Artist_LastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              type="email"
              className="form-control mb-3"
              name="Artist_Email"
              value={artist.Artist_Email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control mb-3"
              name="Artist_Band_ID"
              value={artist.Artist_Band_ID}
              onChange={handleChange}
              placeholder="Band ID"
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control mb-3"
              name="Artist_Contact_No"
              value={artist.Artist_Contact_No}
              onChange={handleChange}
              placeholder="Contact Number"
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control mb-3"
              name="Organizer_ID"
              value={artist.Organizer_ID}
              onChange={handleChange}
              placeholder="Organizer ID"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
