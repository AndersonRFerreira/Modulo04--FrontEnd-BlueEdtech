import * as S from './styled';
import { Title } from '../../Components/Title/styled';
import { useState } from 'react';
import { Api } from '../../Api/Api';
import { useHistory } from 'react-router-dom';

export default function Create() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [raca, setRaca] = useState('');
  const [filme, setFilme] = useState('');

  const history = useHistory();

  const item = {
    name: name,
    url: url,
    raca: raca,
    filme: filme,
    
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const request = await Api.buildApiPostRequest(Api.createUrl(), item).catch(
      (e) => {
        console.error('Erro ao tentar adicionar o item ao banco: ', e);
      }
    );

    // RESPOSTA DA API VEM PRA CÁ PRO RESULT
    const result = await request.json();

    const id = result._id;

    history.push(`/view/${id}`, result);
  };

  return (
    <>
      <Title>Criar um novo personagem</Title>

      <S.Form onSubmit={submitHandler}>
        <S.Label htmlFor="name">Nome</S.Label>
        <S.Input
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          required
        ></S.Input>

        <S.Label htmlFor="url">URL da Imagem</S.Label>
        <S.Input
          id="url"
          type="text"
          onChange={(e) => setUrl(e.target.value)}
          required
        ></S.Input>

        <S.Label htmlFor="raca">Raça</S.Label>
        <S.Select id="raca" onChange={(e) => setRaca(e.target.value)} required>
          <option value="" hidden>
            -
          </option>
          <option value="androide">Androide</option>
          <option value="animal">Animal</option>
          <option value="robo">Robô</option>
          <option value="Humano">Humano</option>
          <option value="jawa">Jawa</option>
          <option value="Wookie">Wookie</option>
          <option value="Hutt">Hutt</option>

          <option value="N/A">Não definido</option>
        </S.Select>

        <S.Label htmlFor="filme">Filme</S.Label>
        <S.Select id="filme" onChange={(e) => setFilme(e.target.value)} required>
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


        <S.Button>Cadastrar</S.Button>
      </S.Form>
    </>
  );
}
