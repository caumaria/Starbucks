import * as React from "react";
import styled from "styled-components";

interface TextFilterProps {
  title: string;
  description: string;
}
const TextFilterContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  @media (max-width: 1000px) {
    text-align: center;
    padding: 1rem;
  }
  h1 {
    font-size: 3.4rem;
    margin-bottom: 30px;
    font-family: "LanderGrande";
    font-weight: 300;
    line-height: 1.1;
  }
  p {
    font-size: 1.1rem;
  }
`;

export default function TextFilter({ title, description }: TextFilterProps) {
  return (
    <TextFilterContainer>
      <h1>{title}</h1>
      <p>
        {description}
      </p>
    </TextFilterContainer>
  );
}
