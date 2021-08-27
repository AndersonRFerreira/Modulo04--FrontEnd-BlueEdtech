import { Title } from '../../Components/Title/styled';
import { Paragraph } from '../../Components/Paragraph/styled';
import * as S from './styled';
import Eu from './Eu.png';

export default function About() {
  return(
    <>
      <Title>Sobre</Title>
      <Paragraph>Esse é o primeiro projeto do quarto módulo de especialidade em Front-end da Blue EdTech. A ideia é integrar um Frontend desenvolvido com React.js com um Backend existente. O objetivo principal é incrementar as habilidades de desenvolvimento e também conhecer as operações de um CRUD (Create, read, update e delete).</Paragraph>

      <Paragraph>Hey! me chamo anderson reis e estudo na blue edtech se especializando no front end.</Paragraph>
      
      <S.ImgCard>
        <S.Img src={Eu}></S.Img>
      </S.ImgCard>
      
      <Paragraph>Me encontre nas redes sociais abaixo, estou sempre por lá :</Paragraph>

      <S.SocialBlock>
        <a href="https://github.com/AndersonRFerreira" target="_blank" rel="noopener noreferrer"><i className="im im-github"></i></a>
        <a href="https://www.linkedin.com/in/anderson-reis-90/" target="_blank" rel="noopener noreferrer"><i className="im im-linkedin"></i></a>
        <a href="https://www.instagram.com/andersonreis.dev/" target="_blank" rel="noopener noreferrer"><i className="im im-instagram"></i></a>
        <a href="andersonn.reis90@gmail.com" target="_blank" rel="noopener noreferrer"><i className="im im-mail"></i></a>
      </S.SocialBlock>
    </>
  )
}