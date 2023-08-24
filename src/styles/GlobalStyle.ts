import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    background-image: ../../assets/PapeldeParede;
  }
`
export const colors = {
  primary: "#65E3FF",
  black: "#000",
  white: "#fff"
}

export const Main = styled.main`
  min-height: calc(100vh - 9rem);
`