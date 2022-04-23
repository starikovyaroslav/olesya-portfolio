import React from "react";

import "./App.css";
import { Route, Routes, useNavigate, useLocation, Navigate} from "react-router-dom";
import { Main } from "../Main/Main";
import { Portfolio } from "../Portfolio/Portfolio";

function App() {

return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
);
}

export default App;
