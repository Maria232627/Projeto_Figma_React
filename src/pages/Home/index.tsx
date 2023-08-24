import * as S from './styles'
import SorvetePrimavera from "../../assets/primavera-e-sorvete-img-metadati.jpg"
import Menu from "../../assets/Menu.png"

export function Home() {
  return (
    <S.Section>
      <img src={SorvetePrimavera} alt="Imagem propaganda" />
      <img src={Menu} alt="Menu" />
    </S.Section>
  )
}