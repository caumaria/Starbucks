import styled from "styled-components";

interface ContainerProps {
  height?: string;
  children?: React.ReactNode;
}

const Containers = styled.section<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  height: ${(props) => (props.height ? `${props.height}px` : "auto")};
`;

const Container: React.FC<ContainerProps> = ({ ...props }) => {
  return <Containers height={props.height}>{props.children}</Containers>;
};

export default Container;
