import styled from "styled-components";

export const ContainerInicial = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  font-size: 1.5em;
  text-align: center;
 
  h1:nth-child(1) {
    color: #3c8bcc;
    font-weight: 400;
  }
  h1:nth-child(2) {
    color: #3c8bcc;
    margin-top: -15px;
  }
`;