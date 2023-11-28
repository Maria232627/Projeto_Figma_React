import { colors } from "../../styles/GlobalStyle"
import styled from "styled-components"

export const Section = styled.section`
    height: 82vh;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5rem;

    h1 {
        padding-left: 8rem;
        font-family: "Odor Mean Chey", serif;
        font-size: 3rem;
    }

    form {
        padding-left: 2rem;
        width: 30%;
        height: 65%;
        display: grid;
        align-items: center;
        border-radius: 2rem;

        
        label {
            color: ${colors.black};
            font-family: "Odor Mean Chey", serif;
            font-size: 2rem;
        }
        

        input {
            background-color: #D9D9D9;
            height: 3.6rem;
            border-radius: 2rem;
            padding-left: 0.6rem;
            font-size: 1rem;
            width: 78%;
        }

        div {
            display: grid;
        }

        .botao {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 1rem;
            padding-right: 7rem;

            button {
                width: 10rem;
                height: 5rem;
                background-color: #D9D9D9;
                border-radius: 2rem;
                font-size: 1.4rem;
                font-family: "Odor Mean Chey", serif;
            }
        }

    }

    a {
        text-decoration: none;
        color: black;
        padding-left: 12rem;
    }

    .logar {
        height: 12rem;
        width: 12rem;
        background-color: #F69F9F;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10rem;

        .login {
            font-size: 2rem;
            padding-left: 0rem;
        }
    }
`