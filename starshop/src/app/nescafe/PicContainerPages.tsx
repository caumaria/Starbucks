import * as React from "react";
import styled from "styled-components";

interface PicContainerPagesProps {
  children: React.ReactNode;
}

const PicContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;

  @media (max-width: 1100px) {
    flex-direction: column;
    height: auto;
    padding: 3rem 0 5rem;
    gap: 2rem;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50%;

    @media (max-width: 1000px) {
      flex-direction: column;
      left: 0%;
    }

    img:nth-child(1) {
      position: absolute;
      right: 72%;
      max-width: 14rem;
      height: auto;

      @media (max-width: 500px) {
        top: 70%;
        right: 10%;
        max-width: 10rem;
      }
    }
    img:nth-child(2) {
      width: 32rem;
      height: auto;

      @media (max-width: 500px) {
        width: 20rem;
      }
    }
  }
`;
const PicContainerPages: React.FC<PicContainerPagesProps> = ({ children }) => {
  return <PicContainer>{children}</PicContainer>;
};

export default PicContainerPages;
