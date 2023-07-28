import styled from "styled-components";

export const ShoppingContainer = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 100vh;
  right: 0;
  top: 0;
  position: fixed;
  padding: 1rem;
  z-index: 9;

  .shopping-container {
          position: fixed;
          top: 0;
          right: -300px; /* Start closed, adjust this value based on your needs */
          width: 300px;
          height: 100vh;
          background-color: #fff;
          box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
          transition: right 0.3s ease;
    }

    .shopping-container.open {
          right: 0; /* Slide in when open */
    }
`;
