import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Combinados } from "../combinados/Combinados";
import {Lanches} from "../lanches/Lanches"
import { Porcoes } from "../porcaos/Porcoes";
import { TelaInicial } from "../telaInicial/TelaInicial";
import {Batatas} from "../batata/Batatas"

export const Router = () => {
    return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<TelaInicial/>}/>
            <Route path={'/lanches'} element={<Lanches/>}/>
            <Route path={'/combinados'} element={<Combinados/>} />
            <Route path={'/porcoes'} element={<Porcoes/>} />
            <Route path={'/batata-recheada'} element={<Batatas/>} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }