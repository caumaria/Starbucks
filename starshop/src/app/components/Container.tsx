import styled from "styled-components";

interface ContainerProps {
  height?: string;
  background?: string;
  width?: string;
  children?: React.ReactNode;
}

const Containers = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  padding: 0 1rem;
  height: ${(props) => (props.height ? `${props.height}` : "auto")};
  background: ${(props) => (props.background ? `${props.background}` : "inherit")};
`;

const Container: React.FC<ContainerProps> = ({ ...props }) => {
  return <Containers 
  height={props.height} 
  background={props.background}
  width={props.width}
  >
    {props.children}
  </Containers>;
};

export default Container;
