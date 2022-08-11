import React from "react";
import { Header } from "../components/header/Header";
import { Container } from "./Styled";

export const Lanches = () => {

    return (
        <Container>
            <Header />
            <section>
                <h1>Lanches</h1>
                <ul>
                    <li>
                        <div>
                            <h3>X-Burguer</h3>
                            <p>Hambúrguer e mussarela.</p>
                            <strong>R$12,00</strong>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>X-Salada</h3>
                            <p>Hambúrguer, presunto, mussarela, alface e tomate.</p>
                            <strong>R$13,00</strong>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>X-Salada Egg</h3>
                            <p>Hambúrguer, presunto, mussarela, alface, tomate e ovo.</p>
                            <strong>R$14,00</strong>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>X-Salada Bacon</h3>
                            <p>Hambúrguer, presunto, mussarela, alface, tomate e bacon.</p>
                            <strong>R$15,00</strong>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>X-Bacon</h3>
                            <p>Hambúrguer, presunto, mussarela e bacon.</p>
                            <strong>R$14,00</strong>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>X-Tudo</h3>
                            <p>Hambúrguer, presunto, mussarela, bacon, alface, tomate e ovo.</p>
                            <strong>R$16,00</strong>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>X-Tudo Duplo</h3>
                            <p>2 Hambúrgueres, mussarela, presunto, bacon, alface, tomate e 2 ovos.</p>
                            <strong>R$21,00</strong>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>X-Burguer Kids</h3>
                            <p>Hambúrguer, mussarela, batata frita(porção individual) e refrigerante lata</p>
                            <strong>R$23,50</strong>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>X-Tudo Triplo</h3>
                            <p>3 Hambúguer ,presunto, mussarela, bacon, alface, tomate, 3 ovos, catupiry ou cheddar.</p>
                            <strong>R$27,50</strong>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Filé Mignon</h3>
                            <p>Filé mignon, presunto e mussarela</p>
                            <strong>R$27,00</strong>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Filé Mignon Salada</h3>
                            <p>Filé mignon, presunto, mussarela, alface e tomate.</p>
                            <strong>R$28,00</strong>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Filé Frango</h3>
                            <p>Filé de frango, presunto, mussarela e bacon.</p>
                            <strong>R$15,00</strong>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Filé de Frango Salada</h3>
                            <p>Filé de frango, presunto, mussarela, alface e tomate.</p>
                            <strong>R$13,00</strong>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Filé de Frango Tudo</h3>
                            <p>Filé de frango, presunto, mussarela, alface, tomate, ovo e bacon.</p>
                            <strong>R$15,50</strong>
                        </div>
                    </li>
                </ul>
            </section>
            <section>
                <h1>Hot Dog</h1>
                <ul>
                    <li>
                        <div>
                            <h3>Dog Simples</h3>
                            <p>Maionese, ketchup, salsicha e batata palha.</p>
                            <strong>R$09,00</strong>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Dog Especial</h3>
                            <p>Maionese, ketchup, salsicha, bacon e batata palha.</p>
                            <strong>R$10,00</strong>
                        </div>
                    </li>
                </ul>
            </section>
        </Container>

    )
}