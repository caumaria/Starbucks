import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 16px;
    color: var(--main-green);
    text-align: center;
    margin: 6px 0;
    word-wrap: break-word;
    letter-spacing: 0.02em;
  }
  img {
    max-width: 100%;
    height: auto;
    border: 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  margin: 1rem 0;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10px;
    position: relative;
    font-size: 14px;
    right: 20.5%;
    color: var(--secondary-green);
  }
`;

export const CounterContainer = styled.div`
  gap: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary-green);
    min-width: 26px;
    height: 26px;
    border-radius: 20px;
    border: 1px solid var(--secondary-green);

    font-size: 14px;
    font-weight: bold;
    background: transparent;
    line-height: 30px;
  }
  :hover {
    background-color: var(--secondary-green);
    color: white;
  }
`;
