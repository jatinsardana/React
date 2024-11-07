import React from 'react';
import './Apicard.css';

function Apicard(props) {
  return (
    <div className="card">
      <img className="card-image" src={props.img} alt="User profile" />
      <div className="card-content">
        <h2 className="card-title">{props.name}</h2>
        <p><strong>Gender:</strong> {props.gender}</p>
        <p><strong>Phone:</strong> {props.phone}</p>
        <p><strong>Email:</strong> {props.email}</p>
      </div>
    </div>
  );
}

export default Apicard;
