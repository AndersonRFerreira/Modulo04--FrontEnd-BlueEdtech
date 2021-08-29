import { Title } from '../../Components/Title/styled';
import { Paragraph } from '../../Components/Paragraph/styled';
import * as S from './styled';
import eu from './eu.png';

export default function About() {
  return (
    <>
      <Title>Sobre</Title>
      <Paragraph>
        Esse é o projeto dde tema livre do quarto módulo de especialidade em Front-end
        da Blue EdTech. A ideia é integrar um Frontend desenvolvido com React.js
        com um Backend existente. O objetivo principal é incrementar as
        habilidades de desenvolvimento e também conhecer as operações de um CRUD
        (Create, read, update e delete).
      </Paragraph>

      <Paragraph>
        Hi! me chamo anderson e sou aluno da blue Edtech, escolhi star wars como tema pois é uma das sagas  que eu mais curto assistir, divirtam-se!
      </Paragraph>

      <S.ImgCard>
        <S.Img src={eu}></S.Img>
      </S.ImgCard>

      <Paragraph>
        Me siga nas minhas redes !
      </Paragraph>

      <S.SocialBlock>
        <a
          href="https://github.com/AndersonRFerreira"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-github"></i>
        </a>
        
        <a
          href="https://www.linkedin.com/in/anderson-reis-90/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-linkedin"></i>
        </a>
  
        <a
          href="https://www.instagram.com/andersonreis.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-instagram"></i>
        </a>
        <a
          href="mailto:andersonn.reis90@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-mail"></i>
        </a>
      </S.SocialBlock>
    </>
  );
}
