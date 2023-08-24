import * as S from "./styles"
import Face from "../../assets/facebook.png"
import Insta from "../../assets/instagram.png"

export function Footer() {
  return (
    <S.Footer>
      <a href="https://facebook.com" target="_blank">
        <img src={Face} alt="Facebook" />
      </a>
      <a href="https://instagram.com">
        <img src={Insta} alt="Instagram" />
      </a>
    </S.Footer>
  )
}