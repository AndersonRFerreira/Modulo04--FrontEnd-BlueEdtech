import logo from './logo.png';
import * as S from './styled';

export default function Navbar() {
  return(
    <S.Navbar>
      <S.Img src={logo} alt="Dragon Ball" />
      <S.List>
      <S.ListItem>
            <S.LinkedPage to="/">Inicio</S.LinkedPage >
        </S.ListItem>

        <S.ListItem>
            <S.LinkedPage  to="/create">Criar</S.LinkedPage >
        </S.ListItem>

        <S.ListItem>
            <S.LinkedPage to="/deleteall">Deletar Tudo</S.LinkedPage >
        </S.ListItem>

        <S.ListItem>
            <S.LinkedPage  to="/about">sobre</S.LinkedPage >
        </S.ListItem>

      </S.List>
    </S.Navbar>
  )
}