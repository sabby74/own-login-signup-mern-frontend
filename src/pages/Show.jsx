import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Show = () => {
  const service = useLoaderData();
  return (
    <div className="show p-4 space-y-4">
      <h1 className="text-3xl font-extrabold text-slate-300 mb-4">
        Service Details for {service.carName}
      </h1>

      <div className="bg-blue-400 p-3 rounded mb-4">
        <h2 className="text-xl font-bold underline text-slate-700">
          Cars name: {service.carName}
        </h2>
      </div>

      <div className="bg-yellow-400 p-3 rounded mb-4">
        <h2 className="text-xl font-bold underline text-slate-700">
          Car Model: {service.carModel}
        </h2>
      </div>

      <h2 className="text-2xl underline text-slate-300 mb-4">
        Service Scheduled
      </h2>

      <div className="text-slate-300 space-y-2">
        <h3>Oil Change : {service.oilChange ? "yes" : "No"}</h3>
        <h3>Tire Rotation :{service.tireRotation ? "yes" : "No"}</h3>
        <h3>Air Filter : {service.airFilter ? "yes" : "No"}</h3>
        <h3>Brake Check : {service.breakCheck ? "yes" : "No"}</h3>
        <h3>Battery Check : {service.batteryCheck ? "yes" : "No"}</h3>
        <h3>Brakes Pad Change : {service.brakePadChange ? "yes" : "No"}</h3>
        <h3>Wheel Allignment : {service.alignment ? "yes" : "No"}</h3>
        <h3>
          Transmission Oil Change :{" "}
          {service.transmissionOilChange ? "yes" : "No"}
        </h3>
        <h3>
          Cabin Air Filter Change :{" "}
          {service.cabinAirFilterChange ? "yes" : "No"}
        </h3>
        <h3>
          Engine Air Filter Change : {service.engineAirFilter ? "yes" : "No"}
        </h3>
        <h3>
          Wiper Blades Change : {service.wiperBladesChange ? "yes" : "No"}
        </h3>
        <h3>Mileage : {service.mileage}</h3>
        <h3>Coolant Change or Topup: {service.coolantChange ? "yes" : "No"}</h3>
        <br />
      </div>
      <Link
        className="hover:italic hover:bg-green-500 transition duration-300 ease-in-out text-slate-700 bg-yellow-400 rounded px-4 py-2 inline-block"
        to="/service"
      >
        Back To Cars service schedules
      </Link>
    </div>
  );
};

export default Show;
