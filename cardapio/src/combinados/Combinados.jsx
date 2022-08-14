import React from "react";
import { Header } from "../components/header/Header";
import { Buttons, ContainerCombinados } from "./Styled";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { goToLanches, goToPorcoes } from "../router/Coordinator";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Combinados = () => {
    const navigate = useNavigate()
    return (
        <ContainerCombinados>
            <Buttons>
            <button onClick={() => goToLanches(navigate)}><ArrowBackIosNewIcon /></button>
            <button onClick={() => goToPorcoes(navigate)}><ArrowForwardIosIcon/></button>
            </Buttons>
            <Header />
            <section>
                <h1>Combinados</h1>
                <ul>
                    <li>
                        <div>
                            <h3>Combinado 01 <span>R$69,00</span></h3>
                            <p>3 X-Burguer, 1 porção de batata frita, 1/2 porção de nugghetes e 1/2 porção de calabresa.</p>
                        </div>
                    </li>
                    <li>
                        <hr />
                        <div>
                            <h3>Combinado 02 <span>R$77,00</span></h3>
                            <p>3 X-Bacon, 1 porção de batata com cheddar e bacon, 1/2 porção de calabresa e 1/2 porção de anel de cabela.</p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div>
                            <h3>Combinado 03 <span>R$84,00</span></h3>
                            <p>3 X-Tudo, 1 porção de batata frita, 1/2 porção de nugghetes e 1/2 porção de calabresa.</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section>
                <hr />
                <h1>Pasteis</h1>
                <ul>
                    <li>
                        <div>
                            <h3>Pizza <span>R$09,00</span></h3>
                        </div>
                    </li>
                    <li>
                        <hr />
                        <div>
                            <h3>Presunto e queijo <span>R$09,00</span></h3>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div>
                            <h3>Calabresa <span>R$09,00</span></h3>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div>
                            <h3>Queijo <span>R$09,00</span></h3>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div>
                            <h3>Carne <span>R$09,00</span></h3>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div>
                            <h3>Frango <span>R$09,00</span></h3>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div>
                            <h3>Carne e queijo <span>R$09,50</span></h3>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div>
                            <h3>Frango com catupiry <span>R$09,50</span></h3>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div>
                            <h3>Calabresa com queijo <span>R$09,50</span></h3>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div>
                            <h3>Calabresa com catupiry <span>R$09,50</span></h3>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div>
                            <h3>Frango com queijo <span>R$09,50</span></h3>
                        </div>
                    </li>
                </ul>
            </section>
            <section>
                <h1>Porções de Batatas Individuais</h1>
                <ul>
                    <li>
                        <div>
                            <h3>Batata individual <span>R$05,00</span></h3>
                        </div>
                    </li>
                    <li>
                        <hr />
                        <div>
                            <h3>Batata com cheddar e bacon <br/>(CHEDDAR TOP) <span>R$06,50</span></h3>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div>
                            <h3>Batata com cheddar e bacon<br/>(CHEDDAR SKALA) <span>R$08,00</span></h3> 
                        </div>
                    </li>
                </ul>
            </section>
        </ContainerCombinados>
    )
}