import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar /> <Home />
      </div>
    ),
  },
  {
    path: "/addnewtask",
    element: (
      <div>
        <Navbar /> <AddTask />
      </div>
    ),
  },
]);

export default router;
