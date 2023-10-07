import React from 'react'
import { Link,Form } from 'react-router-dom'
import {useLoaderData } from 'react-router-dom'

const All = () => {
    const services = useLoaderData()
    return (
      <div ><div className="create">
      <h1 className=" text-slate-700 bg-yellow-400 rounded p-1 m-1">Create A Service For Your Car</h1>
      <br />
      <Form action="/create" method="post" className=" p-4 rounded shadow-lg mx-auto w-full md:max-w-2xl">
      <div className="flex flex-col space-y-2 items-center">
        <input type="text" id="carName" name="carName" placeholder="Enter Car Name" className="p-2 border rounded w-3/4 text-center"/>
        <input type="text" id="carModel" name="carModel" placeholder="Enter Car Model" className="p-2 border rounded w-3/4 text-center"/>
        <input type="input" name="mileage" placeholder="Enter Car Mileage" className="p-2 border rounded w-3/4 text-center" />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="m-2">
          <span className="mr-2">Oil Change:</span>
          <input type="checkbox" name="oilChange" value className="p-1" />
        </h1>

        <h1>
          Tire Rotation : <input type="checkbox" name="tireRotation" value />
        </h1>
        <h1>
          Air Filter Change :{" "}
          <input type="checkbox" name=" airFilter" value />
        </h1>
        <h1>
          Break Check : <input type="checkbox" name="breakCheck" value />
        </h1>
        <h1>
          Battery Check : <input type="checkbox" name="batteryCheck" value />
        </h1>
        <h1>
          Break Pads Change :{" "}
          <input type="checkbox" name="brakePadChange" value />
        </h1>
        <h1>
          Wheel Alignment : <input type="checkbox" name="alignment" value />
        </h1>
        <h1>
          Transmission Oil Change:{" "}
          <input type="checkbox" name="transmissionOilChange" value />
        </h1>
        <h1>
          Cabin Air Filter Change :{" "}
          <input type="checkbox" name="cabinAirFilterChange" value />
        </h1>
        <h1>
          Engine Air Filter Change :{" "}
          <input type="checkbox" name="engineAirFilter" value />
        </h1>
        <h1>
          Wiper Blades Change :{" "}
          <input type="checkbox" name="wiperBladesChange" value />
        </h1>

        <h1>
          Coolant Change :{" "}
          <input type="checkbox" name="coolantChange" value />
        </h1>
        <input className="mt-6 hover:italic hover:bg-green-500 transition duration-300 ease-in-out text-xl text-slate-700 bg-yellow-400 rounded px-5 py-3 inline-block" type="submit" value="Create Service"/>

      </div>
      </Form>




    </div>
       <div className="grid grid-cols-3 gap-4">
                {services.map((service) => (
                    <div key={service._id} className="services p-4 border rounded shadow">
                        <h1 className="underline text-slate-400">Scheduled Service For</h1>
                        <div className="mb-2">
                            <Link className="hover:italic text-slate-600" to={`/${service._id}`}>
                                Car Brand: {service.carName}
                            </Link>
                        </div>
                        <p>Model Name: {service.carModel}</p>
                        <p>Current Mileage: {service.mileage}</p>

                        <Link to={`/${service._id}`}>
                            <button type="button" className="mt-2 rounded bg-blue-500 p-2 text-white hover:bg-blue-600">
                                View Details
                            </button>
                        </Link>

                        <Form action={`/delete/${service._id}`} method="post">
                            <button type="submit" className="mt-2 rounded bg-red-500 p-2 text-white hover:bg-red-600">
                                Delete Service
                            </button>
                        </Form>

                        <Link to={`/${service._id}/edit`}>
                            <button type="submit" className="mt-2 rounded bg-green-400 p-2 text-white hover:bg-green-500">
                                Edit Service
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default All