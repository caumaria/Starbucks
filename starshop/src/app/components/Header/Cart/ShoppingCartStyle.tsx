import styled from "styled-components";

export const ShoppingContainer = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 100vh;
  right: 0;
  top: 0;
  position: fixed;
  padding: 1rem;
  z-index: 9;
`;

export const ShopContainer = styled.div`
  height: 100vh;

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
  padding: 2rem 50px;
  display: inline-block;
  height: calc(100vh - 250px) !important;
  margin: 0 !important;
  
`;
