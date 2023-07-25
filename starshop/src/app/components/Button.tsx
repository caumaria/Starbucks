import styled from "styled-components";

const ButtonStyle = styled.button`
  background: var(--secondary-green);
  border: none;
  border-radius: 200px;
  color: #fff;
  cursor: pointer;
  font-family: "SoDoSans", sans-serif;
  font-weight: 400;
  font-size: .72rem;
  padding: 12px 20px;
  letter-spacing: 0.04em;
`;

const Button = ({ ...props }) => {
  return <ButtonStyle {...props}></ButtonStyle>;
};

export default Button;
