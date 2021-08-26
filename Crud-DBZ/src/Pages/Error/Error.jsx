import * as S from './styled';
import { Title } from '../../Components/Title/styled';
import { useHistory } from 'react-router-dom';


export default function Error() {
  const history = useHistory();
  const goToHome = () => {
    history.push('/');
  };
  
  return(
    <S.Page>
      <S.Img src="https://giphy.com/embed/EoBpmHNvXJxOU" />
      <Title>Página não encontrada!</Title>
      <S.Button onClick={goToHome}>Me tire daqui!</S.Button>
    </S.Page>
  );
}