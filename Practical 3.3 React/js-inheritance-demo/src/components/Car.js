import React from "react";
import Vehicle from "./Vehicle";

function Car({ make, model, year, doors }) {
  const info = `${doors} doors`;
  return <Vehicle make={make} model={model} year={year} info={info} />;
}

export default Car;
