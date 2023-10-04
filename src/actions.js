import { redirect } from "react-router-dom";
const URL = "https://own-loginsignup-mern.onrender.com";

export const createAction = async ({ request }) => {
  // get data from form
  const formData = await request.formData();
  // set up our new person to match schema
  const newservice = {
    carName: formData.get("carName"),
    carModel: formData.get("carModel"),
    oilChange: formData.get("oilChange"),
    tireRotation: formData.get("tireRotation"),
    airFilter: formData.get("airFilter"),
    breakCheck: formData.get("breakCheck"),
    batteryCheck: formData.get("batteryCheck"),
    qtybrakePadChange: formData.get("brakePadChange"),
    alignment: formData.get("alignment"),
    transmissionOilChange: formData.get("transmissionOilChange"),
    cabinAirFilterChange: formData.get("cabinAirFilterChange"),
    engineAirFilter: formData.get("engineAirFilter"),
    wiperBladesChange: formData.get("wiperBladesChange"),
    mileage: formData.get("mileage"),
    coolantChange: formData.get("coolantChange"),
  };
  // Send new person to our API
  console.log(newservice, ":service to be created");
  await fetch(URL + "/service", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newservice),
  });
  // redirect to service page
  return redirect("/service");
  
};

export const updateAction = async ({ params,request }) => {
    // get data from form
    const formData = await request.formData();
    // set up our service  to get updated
    const service = {
      carName: formData.get("carName"),
      carModel: formData.get("carModel"),
      oilChange: formData.get("oilChange"),
      tireRotation: formData.get("tireRotation"),
      airFilter: formData.get("airFilter"),
      breakCheck: formData.get("breakCheck"),
      batteryCheck: formData.get("batteryCheck"),
      qtybrakePadChange: formData.get("brakePadChange"),
      alignment: formData.get("alignment"),
      transmissionOilChange: formData.get("transmissionOilChange"),
      cabinAirFilterChange: formData.get("cabinAirFilterChange"),
      engineAirFilter: formData.get("engineAirFilter"),
      wiperBladesChange: formData.get("wiperBladesChange"),
      mileage: formData.get("mileage"),
      coolantChange: formData.get("coolantChange"),
    };
    // update a service to our API
    console.log(service, ":service to be updated");
    await fetch(URL + "/service/" + params.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    });
    // redirect to home page
    return redirect(`/${params.id}`)
    
  };