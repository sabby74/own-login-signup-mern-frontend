import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Show = () => {
  const service = useLoaderData();
  return (
    <div className="show">
      <h1 className="underline text-slate-700 font-extrabold bg-blue-400 rounded p-2 m-2 ">Cars name : {service.carName}</h1>
      <br />
      <h1 className="underline text-slate-700 bg-yellow-400 rounded p-1 m-1">Car Model : {service.carModel}</h1>
      <br />
      <h1 className="underline text-slate-300"> Service Scheduled </h1>
      <br />
      <div className="text-slate-400 ">
      <h3>Oil Change : {service.oilChange ? "yes" : "No"}</h3>
      <h3>Tire Rotation :{service.tireRotation ? "yes" : "No"}</h3>
      <h3>Air Filter : {service.airFilter ? "yes" : "No"}</h3>
      <h3>Brake Check : {service.breakCheck ? "yes" : "No"}</h3>
      <h3>Battery Check : {service.batteryCheck ? "yes" : "No"}</h3>
      <h3>Brakes Pad Change : {service.brakePadChange ? "yes" : "No"}</h3>
      <h3>Wheel Allignment : {service.alignment ? "yes" : "No"}</h3>
      <h3>Transmission Oil Change : {service.transmissionOilChange ? "yes" : "No"}</h3>
      <h3>Cabin Air Filter Change : {service.cabinAirFilterChange ? "yes" : "No"}</h3>
      <h3>Engine Air Filter Change : {service.engineAirFilter ? "yes" : "No"}</h3>
      <h3>Wiper Blades Change : {service.wiperBladesChange ? "yes" : "No"}</h3>
      <h3>Mileage : {service.mileage}</h3>
      <h3>Coolant Change or Topup: {service.coolantChange ? "yes" : "No"}</h3>
      <br />
      </div>
      <Link className="hover:italic  text-slate-700 bg-yellow-400 rounded p-1 m-1" to="/service">
          <div>Back To Cars service schedules </div>
        </Link>
    </div>
  );
};

export default Show;
