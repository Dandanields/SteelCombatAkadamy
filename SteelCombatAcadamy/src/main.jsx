import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Navbar from "./components/NavBar.jsx";

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<Navbar />);
