import { Title } from '../../Components/Title/styled';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function ReadOne(props) {
  const item = props.location.state;

  const history = useHistory();

  const deleteHandler = async (event) => {
    event.preventDefault();
    history.push(`/delete/${item._id}`, item);
  };

  const editHandler = async (event) => {
    event.preventDefault();
    history.push(`/update/${item._id}`, item);
  };

  return (
    <>
      <Title>{item.name}</Title>
      <S.Card>
        <S.ImgBlock>
          <S.Img src={item.url} alt="Personagem" />
        </S.ImgBlock>

        <S.Text>
          <strong>Raca: </strong>
          {item.raca}
        </S.Text>
        <S.Text>
          <strong>Filme: </strong>
          {item.filme}
        </S.Text>

        <S.ButtonArea>
          <S.ButtonEdit onClick={editHandler}>Editar</S.ButtonEdit>
          <S.ButtonDelete onClick={deleteHandler}>Deletar</S.ButtonDelete>
        </S.ButtonArea>
      </S.Card>
    </>
  );
}
