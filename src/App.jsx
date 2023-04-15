import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Instruction2 from "./components/Instruction2";
import Instruction3 from "./components/Instruction3";
import Instruction4 from "./components/Instruction4";
import Instruction5 from "./components/Instruction5";
import Instruction1 from "./components/Instruction1";
import ExperimentStart from "./components/ExperimentStart";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Instruction1 />,
  },
  {
    path: "/inst2",
    element: <Instruction2 />,
  },
  {
    path: "/inst3",
    element: <Instruction3 />,
  },
  {
    path: "/inst4",
    element: <Instruction4 />,
  },
  {
    path: "/inst5",
    element: <Instruction5 />,
  },
  {
    path: "/start",
    element: <ExperimentStart />,
  },
]);
function App() {
  return (
    <main className="main-container">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
