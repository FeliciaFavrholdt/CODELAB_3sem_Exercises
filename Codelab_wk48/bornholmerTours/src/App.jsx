import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Travels from "./pages/Travels";
import Admin from "./pages/Admin";
import UserAdmin from "./pages/UserAdmin";
import ViewUser from "./pages/ViewUser";
import ChangeRoles from "./pages/ChangeRoles";

//layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="admin" element={<Admin />} />      
      <Route path="user-admin" element={<UserAdmin />} /> 
      <Route path="view-user" element={<ViewUser />} />      
      <Route path="travels" element={<Travels />} />
      <Route path="login"  element={<Login />} />      
      <Route path="change-roles"  element={<ChangeRoles />} />      
    </Route>,
  ),
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;