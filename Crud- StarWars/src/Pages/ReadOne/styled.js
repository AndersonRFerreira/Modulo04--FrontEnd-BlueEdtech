import styled from 'styled-components';

export const Card = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const ImgBlock = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
`;

export const Img = styled.img`
  max-width: 20rem;
  border-radius: 0.5rem;
  height: auto;
  margin-bottom: 1rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export const Text = styled.p`
  font-size: 1.2em;
  padding: 0.5rem 0;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0;
`;

export const ButtonDelete = styled.button`
  background-color: #e76a24;
  color: #ffffff;
  font-size: 1.2em;
  padding: 0.4rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: 200ms;
  margin: 0 0.4rem 0 0.4rem;

  &:hover {
    background-color: #b15019;
  }
`;

export const ButtonEdit = styled.button`
  background-color: #1c4595;
  color: #ffffff;
  font-size: 1.2em;
  padding: 0.4rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: 200ms;
  margin: 0 0.4rem 0 0.4rem;

  &:hover {
    background-color: #183c80;
  }
`;

export const PowerArea = styled.div`
  display: flex;
  align-items: center;
`;
