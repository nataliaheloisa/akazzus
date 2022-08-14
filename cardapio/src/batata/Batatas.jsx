import React from "react";
import { useNavigate } from "react-router-dom";
import {Header} from "../components/header/Header"
import { goToPorcoes } from "../router/Coordinator";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ContainerBatatas } from "./Styled";

export const Batatas = () => {
    const navigate = useNavigate()
    return(
        <ContainerBatatas>
                        <button onClick={() => goToPorcoes(navigate)}><ArrowBackIosNewIcon /></button>
            <Header />
            <br/>
            <section>
                <h1>Batatas Recheadas</h1>
                <ul>
                    <li>
                        <br/>
                        <div>
                            <h3>Caipira<span>R$22,00</span></h3>
                            <p>Creme de milho, frango, catupiry e batata palha.</p>
                        </div>
                    </li>
                    <hr/>
                    <li>
                        <div>
                            <h3>Carne Seca<span>R$27,00</span></h3>
                            <p>Creme branco, carne seca, catupiry e batata palha.</p>
                        </div>
                    </li>
                    <li>
                        <hr/>
                        <div>
                            <h3>Pizza<span>R$22,00</span></h3>
                            <p>Presunto, muçarela,tomate, cebola, orégano, catupiry, azeitona e batata palha.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Portuguesa<span>R$22,00</span></h3>
                            <p>Presunto, muçarela, tomate, seleta de legumes, cebola, ovo, catupiry, azeitona e batata palha.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Bacon<span>R$22,00</span></h3>
                            <p>Creme branco, bacon, catupiry e batata palha.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Brócolis com bacon<span>R$22,00</span></h3>
                            <p>Creme branco, brócolis, bacon, catupiry e batata palha.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Strogonoff de carne<span>R$26,00</span></h3>
                            <p>Strogonoff de carne, catupiry e batata palha.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Strogonoff de frango<span>R$22,00</span></h3>
                            <p>Strogonoff de frango, catupiry e batata palha.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Vegetariana<span>R$22,00</span></h3>
                            <p>Creme branco, seleta de legumes, brócolis, azeitona, muçarela e batata palha.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Presunto e Muçarela<span>R$22,00</span></h3>
                            <p>Presunto, muçarela, catupiry e batata palha.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Calabresa<span>R$22,00</span></h3>
                            <p>Creme branco, calabresa, cebola, catupiry e batata palha.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Hot Dog<span>R$17,00</span></h3>
                            <p>Salsicha, muçarela, bacon, ketchup, maionese, milho e batata palha.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Bolonhesa<span>R$22,00</span></h3>
                            <p>Molho de carne moída, muçarela e batata palha.</p>
                        </div>
                    </li>
                </ul>
            </section>
        </ContainerBatatas>
    )
}