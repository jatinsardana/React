import React, { useEffect, useState } from "react";
import apiCalling from "./ApiCalling.js";
import Apicard from "./Apicard.jsx";
import "./Apicard.css";

function ApiDisplay() {
  const [state, setState] = useState([]);

  const fetchData = async () => {
    try {
      apiCalling().then((e) => {
        console.log(e.results);
        setState(e.results);
      });
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="card-container">
        {state.length > 0 &&
          state.map((user) => (
            <Apicard
              gender={user.gender}
              phone={user.cell}
              email={user.email}
              img={user.picture.large}
              name={`${user.name.title} ${user.name.first} ${user.name.last}`}
            />
          ))}
      </div>
    </>
  );
}

export default ApiDisplay;
