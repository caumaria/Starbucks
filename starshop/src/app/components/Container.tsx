import styled from "styled-components";

interface ContainerProps {
  height?: number;
  children?: React.ReactNode;
}

const Containers = styled.section<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${props => `${props.height}px`};
`;

const Container: React.FC<ContainerProps> = ({ ...props }) => {
  return <Containers>{props.children}</Containers>;
};

export default Container;