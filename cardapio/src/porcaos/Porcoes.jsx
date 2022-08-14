import React from "react";
import { useNavigate } from "react-router-dom";
import {Header} from '../components/header/Header'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { goToCombinados, goToBatataRecheada } from "../router/Coordinator";
import { Buttons, ContainerPorcoes } from "./Styled";


export const Porcoes = () => {
    const navigate = useNavigate();
    return(
        <ContainerPorcoes>
            <Buttons>
            <button onClick={() => goToCombinados(navigate)}><ArrowBackIosNewIcon /></button>
            <button onClick={() => goToBatataRecheada(navigate)}><ArrowForwardIosIcon/></button>
            </Buttons>
            <Header/>
             <section>
                <h1>Porções</h1>
                <ul>
                    <li>
                        <div>
                            <h3>Batata com cheddar e bacon <br/>(CHEDDAR SKALA)</h3>
                            <p>Meia  <span>R$20,00</span></p>
                            <p>Inteira <span>R$28,00</span></p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div>
                        <h3>Batata com cheddar e bacon <br/>(CHEDDAR TOP)</h3>
                            <p>Meia  <span>R$18,50</span></p>
                            <p>Inteira <span>R$26,00</span></p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div>
                        <h3>Batata palito</h3>
                            <p>Meia  <span>R$14,00</span></p>
                            <p>Inteira <span>R$20,00</span></p>
                        </div>
                        <hr/>
                    </li>
                    <li>
                        <div>
                        <h3>Calabresa Acebolada</h3>
                            <p>Meia  <span>R$18,00</span></p>
                            <p>Inteira <span>R$26,00</span></p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div>
                        <h3>Frango à passarinho</h3>
                            <p>Inteira <span>R$25,00</span></p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div>
                        <h3>Anéis de cebola empanados</h3>
                            <p>Meia  <span>R$19,00</span></p>
                            <p>Inteira <span>R$27,00</span></p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div>
                        <h3>Arroz</h3>
                            <p>Inteira <span>R$10,00</span></p>
                        </div>
                        <hr/>
                    </li>
                </ul>
            </section>
            <section>
                <h1>Adicionais</h1>
                <ul>
                    <li>
                        <div>
                            <h3>Milho ou cebola<span>R$01,00</span></h3>
                            <p>*Milho ou cebola não será cobrado! Colocando os dois você paga o valor apenas de um.*</p>
                        </div>
                        <hr/>
                    </li>
                    <li>
                        <div>
                            <h3>Cheddar Skala<br/> ou Catupiry<span>R$04,50</span></h3>
                        </div>
                        <hr/>
                    </li>
                    <li>
                        <div>
                            <h3>Bacon<span>R$04,50</span></h3>
                        </div>
                        <hr/>
                    </li>
                    <li>
                        <div>
                            <h3>Cheddar<span>R$03,00</span></h3>
                        </div>
                    </li>
                </ul>
            </section>
        </ContainerPorcoes>
    )
}