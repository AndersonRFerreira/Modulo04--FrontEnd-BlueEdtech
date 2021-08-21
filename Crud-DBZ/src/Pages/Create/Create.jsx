import * as S from './styled';

export default function Create() {
  return (
    <S.Form>
      <S.Label for="name">Nome</S.Label>
      <S.Input id="name" type="text"></S.Input>

      <S.Label>URL da Imagem</S.Label>
      <S.Input type="text"></S.Input>

      <S.Label>Raça</S.Label>
      <S.Select>
        <option value="" hidden>--</option>
        <option value="humano">Humano</option>
        <option value="androide">Androide</option>
        <option value="saiyajin">Saiyajin</option>
        <option value="ogro">Ogro</option>
      </S.Select>

      <S.Label>Saga</S.Label>
      <S.Select>
        <option value="" hidden>--</option>
        <option value="saiyajins">Saiyajins</option>
        <option value="freeza">Freeza</option>
        <option value="androides">Androides</option>
        <option value="cell">Cell</option>
      </S.Select>

      <S.Label>Poder de Luta</S.Label>
      <S.Input type="number" min="0"></S.Input>
      

      <S.Button>Cadastrar</S.Button>
    </S.Form>
  )
}
