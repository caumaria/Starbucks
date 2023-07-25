import styled from "styled-components";

const MainTitle = styled.h1`
  font-size: 28px;
  line-height: 34px;
  margin: 1rem auto 60px;
  color: var(--secondary-green);
  border-bottom: 2px solid #006241;
  display: table;
  font-family: "LanderGrande";
  font-weight: 300;
`;

const Title = ({ ...props }) => {
  return <MainTitle {...props}></MainTitle>;
};

export default Title;
