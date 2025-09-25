import React from "react";
import Vehicle from "./Vehicle";

function Bike({ make, model, year, bikeType }) {
  const info = `${bikeType} bike`;
  return <Vehicle make={make} model={model} year={year} info={info} />;
}

export default Bike;
