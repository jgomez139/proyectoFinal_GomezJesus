import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

import { CamiCrear } from "../../componentes/camisas/CamiCrear";
import { CamiListar } from "../../componentes/camisas/CamiListar";
import { CamiAdmin } from "../../componentes/camisas/CamiAdmin";
import { CamiActualizar } from "../../componentes/camisas/CamiActualizar";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/camcre" element={<CamiCrear />} />
      <Route path="/camlis" element={<CamiListar />} />
      <Route path="/camadm" element={<CamiAdmin />} />

      <Route path="/camactual/:codigo" element={<CamiActualizar />} />

      <Route path="/acer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
