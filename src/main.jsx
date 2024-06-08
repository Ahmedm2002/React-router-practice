import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/About-Us/AboutUs";
import Contact from "./Components/ContactUs/ContactUs";
import Layout from "./Components/Layout";
import User from "./Components/User/User";
import Github, { getInfo } from "./Components/GitHub/Github";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/aboutUs",
//         element: <AboutUs />,
//       },
//       {
//         path: "/contactUs",
//         element: <Contact />,
//       },
//       {
//         path: "/",
//         element: <Home />,
//       },
//     ],
//   },
// ]);

// Another way of wirting the Router

// if you want to furter use more router then close that path and do the same as for the home directory
// E.g 
// <Route path="user/:userId" element={<User />}>
//  <Route path = {} element = {} /> 
//</Route>



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactUs" element={<Contact />} />
      <Route path="/" element={<Home />} />
      <Route path="user/:userId" element={<User />} />
      <Route path="/github" element={<Github />} loader={getInfo} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
