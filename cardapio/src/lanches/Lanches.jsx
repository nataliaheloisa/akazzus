import React from "react";
import { Header } from "../components/header/Header";
import { Container} from "./Styled";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { goToCombinados } from "../router/Coordinator";
import { useNavigate } from "react-router-dom";




export const Lanches = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <button onClick={() => goToCombinados(navigate)}><ArrowForwardIosIcon/></button>
            <Header />
            <br/>
            <section>
                <h1>Lanches</h1>
                <ul>
                    <li>
                        <br/>
                        <div>
                            <h3>X-Burguer<span>R$12,00</span></h3>
                            <p>Hambúrguer e muçarela.</p>
                        </div>
                    </li>
                    <hr/>
                    <li>
                        <div>
                            <h3>X-Salada<span>R$13,00</span></h3>
                            <p>Hambúrguer, presunto, muçarela, alface e tomate.</p>
                        </div>
                    </li>
                    <li>
                        <hr/>
                        <div>
                            <h3>X-Salada Egg<span>R$14,00</span></h3>
                            <p>Hambúrguer, presunto, muçarela, alface, tomate e ovo.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>X-Salada Bacon<span>R$15,00</span></h3>
                            <p>Hambúrguer, presunto, muçarela, alface, tomate e bacon.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>X-Bacon<span>R$14,00</span></h3>
                            <p>Hambúrguer, presunto, muçarela e bacon.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>X-Tudo<span>R$16,00</span></h3>
                            <p>Hambúrguer, presunto, muçarela, bacon, alface, tomate e ovo.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>X-Tudo Duplo<span>R$21,00</span></h3>
                            <p>2 Hambúrgueres, muçarela, presunto, bacon, alface, tomate e 2 ovos.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>X-Burguer Kids<span>R$23,50</span></h3>
                            <p>Hambúrguer, muçarela, batata frita(porção individual) e refrigerante lata</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>X-Tudo Triplo<span>R$27,50</span></h3>
                            <p>3 Hambúguer ,presunto, muçarela, bacon, alface, tomate, 3 ovos, catupiry ou cheddar.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Filé Mignon<span>R$27,00</span></h3>
                            <p>Filé mignon, presunto e muçarela</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Filé Mignon Salada<span>R$28,00</span></h3>
                            <p>Filé mignon, presunto, muçarela, alface e tomate.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Filé Frango<span>R$15,00</span></h3>
                            <p>Filé de frango, presunto, muçarela e bacon.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Filé de Frango Salada<span>R$13,00</span></h3>
                            <p>Filé de frango, presunto, muçarela, alface e tomate.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Filé de Frango Tudo<span>R$15,50</span></h3>
                            <p>Filé de frango, presunto, muçarela, alface, tomate, ovo e bacon.</p>
                            <hr/>
                        </div>
                    </li>
                </ul>
            </section>
            <section>
                <h1>Hot Dog</h1>
                <br/>
                <ul>
                    <li>
                        <div>
                            <h3>Dog Simples<span>R$09,00</span></h3>
                            <p>Maionese, ketchup, salsicha e batata palha.</p>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Dog Especial<span>R$10,00</span></h3>
                            <p>Maionese, ketchup, salsicha, bacon e batata palha.</p>
                        </div>
                    </li>
                </ul>
            </section>
        </Container>

    )
}