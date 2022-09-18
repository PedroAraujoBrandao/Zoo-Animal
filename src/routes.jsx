import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import InfoGerais from "./Pages/InfoGerais";
import AnimalPage from "./Pages/AnimalPage";

function Rout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<InfoGerais />} />
                <Route exact path="/info" element={<InfoGerais />} />
                <Route exact path="/detalhes" element={<AnimalPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rout;