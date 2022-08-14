import { ContainerInicial } from "./Styled"
import { useNavigate } from "react-router-dom";
import { goToLanches } from "../router/Coordinator";

export const TelaInicial = () => {
    const navigate = useNavigate();
    return (
          <ContainerInicial>
            <img src="../akazzus.jpg" alt="" />
            {setTimeout(() => {
              goToLanches(navigate)
            }, 1500)}
          </ContainerInicial>
    )
  }
 