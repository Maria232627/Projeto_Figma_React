import * as S from "./styles"
import Logo from "../../assets/sorvete.png"
import { IPage } from "../../App"

export function Header({ setPage }: IPage) {
  return (
    <S.Header>
      <picture>
        <img src={Logo} alt="Logo" />
      </picture>
      <S.NavBar>
        <ul>
          <li>
            <a href="#" onClick={() => setPage(1)}>Home</a>
          </li>
          <li>
            <a href="#" onClick={() => setPage(2)}>Pedidos</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}