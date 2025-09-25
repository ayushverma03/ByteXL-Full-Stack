import React, { useState } from "react";
import Car from "./components/Car";
import Bike from "./components/Bike";
import "./App.css";

function App() {
  const [vehicles, setVehicles] = useState([
    { type: "Car", make: "Toyota", model: "Camry", year: 2023, doors: 4 },
    { type: "Car", make: "Honda", model: "Civic", year: 2022, doors: 4 },
    { type: "Bike", make: "Yamaha", model: "MT-15", year: 2021, bikeType: "Sport" },
    { type: "Bike", make: "Royal Enfield", model: "Classic 350", year: 2020, bikeType: "Cruiser" },
  ]);

  const [formData, setFormData] = useState({
    type: "Car",
    make: "",
    model: "",
    year: "",
    doors: "",
    bikeType: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setVehicles(prev => [...prev, formData]);
    setFormData({ type: "Car", make: "", model: "", year: "", doors: "", bikeType: "" });
  };

  return (
    <div className="container">
      <h1>Vehicle Inheritance Demo (React)</h1>

      <form className="vehicle-form" onSubmit={handleAdd}>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
        </select>
        <input name="make" placeholder="Make" value={formData.make} onChange={handleChange} required />
        <input name="model" placeholder="Model" value={formData.model} onChange={handleChange} required />
        <input name="year" type="number" placeholder="Year" value={formData.year} onChange={handleChange} required />
        {formData.type === "Car" ? (
          <input name="doors" type="number" placeholder="Doors" value={formData.doors} onChange={handleChange} required />
        ) : (
          <input name="bikeType" placeholder="Bike Type" value={formData.bikeType} onChange={handleChange} required />
        )}
        <button type="submit">Add Vehicle</button>
      </form>

      <div className="vehicle-list">
        {vehicles.map((v, index) => {
          return v.type === "Car" ? (
            <Car key={index} make={v.make} model={v.model} year={v.year} doors={v.doors} />
          ) : (
            <Bike key={index} make={v.make} model={v.model} year={v.year} bikeType={v.bikeType} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
