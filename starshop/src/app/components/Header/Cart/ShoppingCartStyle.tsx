import styled from "styled-components";

export const ShoppingContainer = styled.div`
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 460px;
  min-width: 320px;
  width: 100%;
  height: 100vh;
  right: 0;
  top: 0;
  position: fixed;
  padding: 1rem;
  z-index: 9;
`;

export const ShopContainer = styled.div`
  height: 100vh;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  h1 {
    font-size: 26px;
    font-weight: 400;
    line-height: 38px;
    color: var(--main-green);
  }

  p {
    font-size: 16px;
    color: #767676;
  }
`;

export const CardWrapper = styled.div`
  overflow-x: auto;
  padding: 1rem 50px;
  display: inline-block;
  height: calc(100vh - 280px) !important;
  margin: 0 !important;
  gap: 1rem;
`;

export const CartTotal = styled.div`
  align-items: center;
  border-top: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-top: 1rem;
  margin-bottom: 1rem;

  section {
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
  }

  button {
    width: 90%;
  }

  a {
    font-size: 16px;
    color: var(--secondary-green);
    border-bottom: 1px solid var(--secondary-green);
  }
`;
