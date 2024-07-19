import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Link} from 'react-router-dom'

function View() {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/view/${id}`)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setArtist(res.data[0]);
        } else {
          setArtist(null);
        }
      })
      .catch((err) => {
        console.log(err);
        setArtist(null);
      });
  }, [id]);

  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
      <div className="w-70 bg-white rounded p-3 ">
        {artist ? (
          <div>
          <h2>Artist Details</h2>
          <table>
            <tbody>
              <tr>
                <td><strong>ID:</strong></td>
                <td>{artist.Artist_ID}</td>
              </tr>
              <tr>
                <td><strong>First Name:</strong></td>
                <td>{artist.Artist_FirstName}</td>
              </tr>
              <tr>
                <td><strong>Last Name:</strong></td>
                <td>{artist.Artist_LastName}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{artist.Artist_Email}</td>
              </tr>
              <tr>
                <td><strong>Band ID:</strong></td>
                <td>{artist.Artist_Band_ID}</td>
              </tr>
              <tr>
                <td><strong>Contact Number:</strong></td>
                <td>{artist.Artist_Contact_No}</td>
              </tr>
              <tr>
                <td><strong>Organizer ID:</strong></td>
                <td>{artist.Organizer_ID}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <Link to={'/'} className="btn btn-secondary">Back</Link>
            <Link to={`/edit/${artist.Artist_ID}`}type="button" className="btn btn-info">Edit</Link>
          </div>
        </div>
        
        ) : (
          <p>Loading artist details...</p>
        )}
      </div>
    </div>
  );
}

export default View;
