const URL = "https://own-loginsignup-mern.onrender.com"

export const ServiceLoader = async () => {
    const res = await fetch(URL + "/service")
    const service = await res.json()
    console.log(service ,"log from loaders file");
    return service
  }
  


  export const ShowLoader = async ({ params }) => {
    console.log(params, "ShowLoader");
    const res = await fetch(URL + "/service/" + params.id);
    const service = await res.json();
    return service;
  };