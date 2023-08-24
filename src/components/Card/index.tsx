import * as S from "./styles";

export interface ICard {
  data: string
  titulo: string
  mensagem: string
}
export const Card = ({ data, titulo, mensagem }: ICard) => {
  return (
    <S.Aside>
      <h3>
        <strong>Data: </strong> {data}
      </h3>
      <h4>Título: {titulo}</h4>
      <p>Mensagem: {mensagem}</p>
    </S.Aside>
  );
};