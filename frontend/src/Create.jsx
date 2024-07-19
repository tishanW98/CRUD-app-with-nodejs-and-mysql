import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Create() {
  const [artist, setArtist] = useState({
    Artist_ID: '',
    Artist_FirstName: '',
    Artist_LastName: '',
    Artist_Email: '',
    Artist_Band_ID: '',
    Artist_Contact_No: '',
    Organizer_ID: ''
  });
  const handleChange = (e) => {
    setArtist({ ...artist, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/create", artist)
    .then((res) => {
      console.log(res);
      navigate('/');
    })
    .catch((err) => {
      console.log(err);
    });
  };
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
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
        <div><input
            type="text"
            className="form-control mb-3"
            name="Artist_LastName"
            value={artist.Artist_LastName}
            onChange={handleChange}
            placeholder="Last Name"
          /></div>
          <div><input
            type="email"
            className="form-control mb-3"
            name="Artist_Email"
            value={artist.Artist_Email}
            onChange={handleChange}
            placeholder="Email"
          /></div>
          <div><input
            type="text"
            className="form-control mb-3"
            name="Artist_Band_ID"
            value={artist.Artist_Band_ID}
            onChange={handleChange}
            placeholder="Band ID"
          /></div>
          <div><input
            type="text"
            className="form-control mb-3"
            name="Artist_Contact_No"
            value={artist.Artist_Contact_No}
            onChange={handleChange}
            placeholder="Contact Number"
          /></div>
          <div><input
            type="text"
            className="form-control mb-3"
            name="Organizer_ID"
            value={artist.Organizer_ID}
            onChange={handleChange}
            placeholder="Organizer ID"
          /></div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create