import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    
    <h1 className="m-3  font-extrabold  text-slate-700 ">
      <Header />
      <Outlet />
    </h1>
  
  );
}
