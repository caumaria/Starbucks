import styled from "styled-components";

interface TextProps {
  children?: React.ReactNode;
}

const TextStyle = styled.p<TextProps>`
  color: var(--secondary-grey);
  font-size: 14px;
  letter-spacing: 0.02em;
  line-height: 30px;
  margin: 0 18px 0 7px;

  :hover {
    border-bottom: solid 2px #006241;
  }
`;

const Text: React.FC<TextProps> = ({ ...props }) => {
  return <TextStyle>{props.children}</TextStyle>;
};

export default Text;
