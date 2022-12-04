import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import './fonts/Cyberpunk.ttf';
import './fonts/Dirtchunk.ttf';
import './fonts/Dirtchunk.otf';
import App from "./App";
import './index.css';

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <StrictMode>
<BrowserRouter>
    <App />
</BrowserRouter>
</StrictMode>
, document.getElementById("root"));
