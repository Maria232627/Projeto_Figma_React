import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  background-color: ${colors.primary};
  border-bottom: 0.4rem solid ${colors.black};
  display: flex;
  height: 6rem;
  picture {
    margin-left: 0.5rem;
    padding: 0.5rem;
    img {
      height: 100%;
    }
  }
`

export const NavBar = styled.nav`
  /* Navegação */
  font-family: "Imperial Script";
  font-size: 2rem;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      padding: 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: var(--black);
      }
    }
    li:hover {
      background-color: ${colors.primary};
    }
  }

`