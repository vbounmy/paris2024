import "./reset.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App.js";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <div>
//       <App />
//     </div>
//   </React.StrictMode>
// );

const router = createHashRouter([
  {
    path:"/*",
    element: <App />,
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

