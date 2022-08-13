import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Combinados } from "../combinados/Combinados";
import {Lanches} from "../lanches/Lanches"
import { TelaInicial } from "../telaInicial/TelaInicial";

export const Router = () => {
    return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<TelaInicial/>}/>
            <Route path={'/lanches'} element={<Lanches/>}/>
            <Route path={'/combinados'} element={<Combinados/>} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }