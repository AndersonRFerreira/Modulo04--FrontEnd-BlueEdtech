import styled from 'styled-components';

export const ImgCard = styled.div`
  background-color: #e7e5e8;
  width: 14rem;
  height: 16rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const Img = styled.img`
  width: 12rem;
  height: 10rem;
`;

export const SocialBlock = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;

  & a {
    color: #dba90d;

    & i {
      padding: 0 0.5rem;
      font-size: 2.5em;
      transition: 200ms;

      &:hover {
        color: #b15019;
      }
    }
  }
`;
