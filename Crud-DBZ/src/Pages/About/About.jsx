import { Title } from '../../Components/Title/styled';
import { Paragraph } from '../../Components/Paragraph/styled';
import * as S from './styled';
import isa from './isa.jpeg';

export default function About() {
  return(
    <>
      <Title>Sobre</Title>
      <Paragraph>Esse é o primeiro projeto do quarto módulo de especialidade em Front-end da Blue EdTech. A ideia é integrar um Frontend desenvolvido com React.js com um Backend existente. O objetivo principal é incrementar as habilidades de desenvolvimento e também conhecer as operações de um CRUD (Create, read, update e delete).</Paragraph>

      <Paragraph>Meu nome é Isabella sou desenvolvedora Fullstack e professora na Blue EdTech no módulo de Frontend.</Paragraph>
      
      <S.ImgCard>
        <S.Img src={isa}></S.Img>
      </S.ImgCard>
      
      <Paragraph>Se tiver dúvidas ou quiser entrar em contato, é só me seguir nas redes e trocar uma ideia, se eu puder ajudar estou a disposição:</Paragraph>

      <S.SocialBlock>
        <a href="https://github.com/isabellanunes" target="_blank" rel="noopener noreferrer"><i className="im im-github"></i></a>
        <a href="https://open.spotify.com/user/n1dqwfofokv86pd8lgh6jcro0?si=a2da442b4f9f42de" target="_blank" rel="noopener noreferrer"><i className="im im-spotify"></i></a>
        <a href="https://www.linkedin.com/in/isabellanunes/" target="_blank" rel="noopener noreferrer"><i className="im im-linkedin"></i></a>
        <a href="https://isabellanunes.me" target="_blank" rel="noopener noreferrer"><i className="im im-globe"></i></a>
        <a href="https://www.instagram.com/isadfrn/" target="_blank" rel="noopener noreferrer"><i className="im im-instagram"></i></a>
        <a href="mailto:isabelladefreitasnunes@gmail.com" target="_blank" rel="noopener noreferrer"><i className="im im-mail"></i></a>
      </S.SocialBlock>
    </>
  )
}