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
    margin: 0 30px;
    height: auto;
    width: auto;
    border: 0;
  }
  p:nth-child(1) {
    height: 70px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10px;
    font-size: 14px;
    color: var(--secondary-green);
  }

  button {
    background-color: var(--secondary-green);

    &:hover {
      background-color: #006241CC;
    }
  }
`;

export const CounterContainer = styled.div`
  gap: 1rem;
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
  button:hover {
    background-color: var(--secondary-green);
    color: white;
  }

  span {
    user-select: none;
    font-size: 1rem;
    padding-top: .2rem;
  }
`;
