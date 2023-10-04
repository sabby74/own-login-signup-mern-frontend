import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";
import { ServiceLoader, ShowLoader } from "./loaders";
import { createAction } from "./actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/service" element={<Index />} loader={ServiceLoader} />
      <Route path=":id" element={<Show />} loader={ShowLoader}/>
      <Route path="create" action={createAction}/>
      <Route path="update/:id" />
      <Route path="delete/:id" />
      
    </Route>
  )
);

export default router;
