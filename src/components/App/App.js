import React from "react";

import "./App.css";
import { Route, Routes, useNavigate, useLocation, Navigate} from "react-router-dom";
import { Main } from "../Main/Main";

function App() {

return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </div>
);
}

export default App;
