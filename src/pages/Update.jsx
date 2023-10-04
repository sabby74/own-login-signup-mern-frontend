import React, { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";

const Update = () => {
  const service = useLoaderData();
  const [formData, setFormdata] = useState(service);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
  
    setFormdata((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  

  return (
    <div className="update">
      <Form action={`/update/${service._id}`} method="post">
        Cars Name:
        <input
          type="input"
          name="carName"
          value={formData.carName}
          onChange={handleChange}
          placeholder="car's Name"
        />
        <br />
        Cars Model:
        <input
          type="input"
          name="carModel"
          value={formData.carModel}
          onChange={handleChange}
          placeholder="car's Model"
        />
        <br />
   
          Oil Change:
          <input
            type="checkbox"
            checked={formData.oilChange}
            name="oilChange"
            value={formData.oilChange}
            onChange={handleChange}
          />
          <br />
          Tire Rotation:
          <input
            type="checkbox"
            checked={formData.tireRotation}
            name="tireRotation"
            value={formData.tireRotation}
            onChange={handleChange}
          />
          <br />
          Air Filter:
          <input
            type="checkbox"
            checked={formData.airFilter}
            name="airFilter"
            value={formData.airFilter}
            onChange={handleChange}
          />
          <br />
          Break Check:
          <input
            type="checkbox"
            checked={formData.breakCheck}
            name="breakCheck"
            value={formData.breakCheck}
            onChange={handleChange}
          />
          <br />
          Battery Check:
          <input
            type="checkbox"
            checked={formData.batteryCheck}
            name="batteryCheck"
            value={formData.batteryCheck}
            onChange={handleChange}
          />
          <br />
          Brake Pad Change:
          <input
            type="checkbox"
            checked={formData.brakePadChange}
            name="brakePadChange"
            value={formData.brakePadChange}
            onChange={handleChange}
          />
          <br />
          Wheel Allignment:
          <input
            type="checkbox"
            checked={formData.alignment}
            name="alignment"
            value={formData.alignment}
            onChange={handleChange}
          />
          <br />
          Transmission Oil Change:
          <input
            type="checkbox"
            checked={formData.transmissionOilChange}
            name="transmissionOilChange"
            value={formData.transmissionOilChange}
            onChange={handleChange}
          />
          <br />
          Cabin Air Filter Change:
          <input
            type="checkbox"
            checked={formData.cabinAirFilterChange}
            name="cabinAirFilterChange"
            value={formData.cabinAirFilterChange}
            onChange={handleChange}
          />
          <br />
          Engine Air Filter Change:
          <input
            type="checkbox"
            checked={formData.engineAirFilter}
            name="engineAirFilter"
            value={formData.engineAirFilter}
            onChange={handleChange}
          />
          <br />
          Wiper Blades Change:
          <input
            type="checkbox"
            checked={formData.wiperBladesChange}
            name="wiperBladesChange"
            value={formData.wiperBladesChange}
            onChange={handleChange}
          />
          <br />
          Mileage:
          <input
          type="input"
          name="mileage"
          value={formData.mileage}
          onChange={handleChange}
          placeholder="mileage"
        />
           <br />
           Coolant Change:
          <input
            type="checkbox"
            checked={formData.coolantChange}
            name="coolantChange"
            value={formData.coolantChange}
            onChange={handleChange}
          />
       
        <br />
        <input
          className="rounded-full p-2 bg-green-400"
          type="submit"
          value={`update ${service.carName}`}
        />
      </Form>
    </div>
  );
};

export default Update;
