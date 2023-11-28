import * as S from "./styles"
import Logo from "../../assets/sorvete.png"

export function Header() {
  return (
    <S.Header>
      <picture>
        <img src={Logo} alt="Logo" />
      </picture>
      <S.NavBar>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="Lista">Pedidos</a>
          </li>
          <li>
            <a href="Cadastro">Cadastrar</a>
          </li>
          <li>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}