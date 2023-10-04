const URL = "http://own-loginsignup-mern.onrender.com"

export const ServiceLoader = async () => {
    const res = await fetch(URL + "/service")
    const service = await res.json()
    console.log(service ,"log from loaders file");
    return service
  }
  