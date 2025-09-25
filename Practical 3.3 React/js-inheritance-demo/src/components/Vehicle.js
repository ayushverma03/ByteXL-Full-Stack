import React from "react";

function Vehicle({ make, model, year, info }) {
  return (
    <div className="vehicle-card">
      <h3>{year} {make} {model}</h3>
      <p>{info}</p>
    </div>
  );
}

export default Vehicle;
