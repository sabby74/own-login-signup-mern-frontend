import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Update from "./pages/Update";
import Show from "./pages/Show";
import All from "./pages/All";
// import Index from "./pages/Index";
import { ServiceLoader, ShowLoader } from "./loaders";
import { createAction, deleteAction, updateAction } from "./actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/service" element={<All />} loader={ServiceLoader} />
      <Route path="/home" element={<Home />} />
      <Route path=":id" element={<Show />} loader={ShowLoader}/>
      <Route path=":id/edit" element={<Update />} loader={ShowLoader} />
      <Route path="create" action={createAction}/>
      <Route path="update/:id" action={updateAction}/>
      <Route path="delete/:id" action={deleteAction}/>
      
    </Route>
  )
);

export default router;
