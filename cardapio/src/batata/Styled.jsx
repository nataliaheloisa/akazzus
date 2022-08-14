import styled from 'styled-components';

export const ContainerBatatas = styled.div`
    background-color: black;
    opacity: 0.9;

    ul{
        list-style: none;
    }

    hr{
        margin: 1em auto;
        align-items: center;
        text-align: center;
        max-width: 50vw;
    }
    h3{
        text-transform: uppercase;
        display: flex;
        justify-content: space-evenly;
    }
    h1{
        font-size: 25px;
        text-transform: uppercase;
        text-align: center;
        color: #3c8bcc;
        padding: auto;
    }

    h3, p{
        font-size: 20px;
        text-align: center;
        color: white;
        padding: 1em;
    }
    
    button{
        padding: 0.5em;
        font-size: 2em;
        display: flex;
        background-color: transparent;
        color: white;
        border: none;
        margin-right: 80vw;
        margin-bottom: 0px;
    }
`;
