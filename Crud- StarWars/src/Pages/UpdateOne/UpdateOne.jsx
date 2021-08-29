import * as S from './styled';
import Loading from '../../Components/Loading/Loading';
import { Title } from '../../Components/Title/styled';
import { useState } from 'react';
import { Api } from '../../Api/Api';
import { useHistory } from 'react-router-dom';

export default function UpdateOne(props) {
  const state = props.location.state;

  const [name, setName] = useState(state.name);
  const [url, setUrl] = useState(state.url);
  const [raca, setRaca] = useState(state.raca);
  const [filme, setFilme] = useState(state.filme);
  

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const item = {
    name: name,
    url: url,
    raca: raca,
    filme: filme,

  };

  const submitHandler = async (event) => {
    setLoading(true);
    event.preventDefault();

    const request = await Api.buildApiPutRequest(
      Api.updateUrl(state._id),
      item
    ).catch((e) => {
      console.error('Erro ao tentar modificar o item no banco: ', e);
    });

    const result = await request.json();
    const id = result._id;
    history.push(`/view/${id}`, item);
  };

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <>
          <Title>Atualizar</Title>

          <S.Form onSubmit={submitHandler}>
            <S.Label htmlFor="name">Nome</S.Label>
            <S.Input
              value={name}
              id="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
            ></S.Input>

            <S.Label htmlFor="url">URL da Imagem</S.Label>
            <S.Input
              value={url}
              id="url"
              type="text"
              onChange={(e) => setUrl(e.target.value)}
              required
            ></S.Input>

            <S.Label htmlFor="raca">Raça</S.Label>
            <S.Select
              value={raca}
              id="raca"
              onChange={(e) => setRaca(e.target.value)}
              required
            >
              <option value="" hidden>
                -
              </option>
              <option value="androide">Androide</option>
              <option value="animal">Animal</option>
              <option value="robo">Robô</option>
              <option value="Humano">Humano</option>
              <option value="togruta">togruta</option>
              <option value="jawa">Jawa</option>
              
            </S.Select>

            <S.Label htmlFor="filme">Filme</S.Label>
            <S.Select
              value={filme}
              id="filme"
              onChange={(e) => setFilme(e.target.value)}
              required
            >
              <option value="" hidden>
                -
              </option>
              <option value="Star Wars - Nova esperança">Star Wars - Nova esperança</option>
              <option value="Star Wars- O império contra-ataca">Star Wars- O império contra-ataca</option>
              <option value="OStar Wars - O retorno de Jedi">Star Wars - O retorno de Jedi </option>
              <option value="Star Wars - Ataque dos Clones">Star Wars - Ataque dos Clones</option>
              <option value="Star Wars - A vingança dos Sith">Star Wars - A vingança dos Sith </option>
              <option value="Star Wars - O despertar da força">Star Wars - O despertar da força</option>
              <option value="Star Wars - Os ultimos Jedi">Star Wars - Os ultimos Jedi</option>
              <option value="Star Wars - A ascensão de Skywalker">Star Wars - A ascensão de Skywalker </option>
            </S.Select>

            <S.Button>Alterar</S.Button>
          </S.Form>
        </>
      )}
    </>
  );
}
