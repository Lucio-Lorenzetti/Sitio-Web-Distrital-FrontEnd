// src/routes/AppRoutes.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Institucional from "../pages/Institucional/Index";
import Documentacion from "../pages/Documentacion/Documentacion";
import Programa from "../pages/Programa/Programa";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Institucional />} />
        <Route path="/documentacion" element={<Documentacion />} />
        <Route path="/programa" element={<Programa />} />
        {/* Redirigir cualquier ruta desconocida a institucional */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
