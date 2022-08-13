import { ContainerInicial } from "./Styled"
import { useNavigate } from "react-router-dom";
import { goToLanches } from "../router/Coordinator";

export const TelaInicial = () => {
    const navigate = useNavigate();
    return (
          <ContainerInicial>
            <h1>Akazzus</h1>
            <h1>Lanchonete</h1>
            {setTimeout(() => {
              goToLanches(navigate)
            }, 1500)}
          </ContainerInicial>
    )
  }
 