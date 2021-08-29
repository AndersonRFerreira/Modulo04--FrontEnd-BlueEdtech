import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Img = styled.iframe`
  margin-top: 4rem;
  border: none;
`;

export const Button = styled.button`
  background-color: #e76a24;
  color: #ffffff;
  font-size: 1.2em;
  padding: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background-color: #b15019;
  }
`;
