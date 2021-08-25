import { Title } from '../../Components/Title/styled';
import * as S from './styled';
import Power from '../../Components/Power/Power';
import { useHistory } from 'react-router-dom';


export default function ReadOne() {
  const item = props.location.state;

  const history = useHistory();

  const deleteHandler = async (event) => {
    event.preventDefault();
    history.push(`/delete/${item._id}`, item);
  };

  return (
    <>
      <Title>{item.name}</Title>
      <S.Card>
        <S.ImgBlock>
          <S.Img src={item.url} alt="Personagem" />
        </S.ImgBlock>

        <S.PowerArea>
          <S.Text>
            <strong>Poder: </strong>
          </S.Text>
          <Power value={item.poder}></Power>
        </S.PowerArea>

        <S.Text>
          <strong>Raça: </strong>
          {item.raca}
        </S.Text>
        <S.Text>
          <strong>Saga: </strong>
          {item.saga}
        </S.Text>

        <S.ButtonArea>
          <S.ButtonEdit>Editar</S.ButtonEdit>
          <S.ButtonDelete onClick={deleteHandler}>Deletar</S.ButtonDelete>
        </S.ButtonArea>
      </S.Card>
    </>
  );
}
    
