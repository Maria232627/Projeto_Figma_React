import * as S from './styles'
import { dados } from "../../services/dados"
import { ComponentCard } from '../../components'

export function List() {
  return (
    <S.Section>
      {dados.map(item => (
        <ComponentCard
          key={item.id}
          data={item.data}
          mensagem={item.mensagem}
          titulo={item.titulo}
        />
      ))}
    </S.Section>
  )
}