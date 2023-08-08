import styled from "styled-components";

interface HeaderContainerProps {
  open: boolean;
  children: React.ReactNode;
}

const StyledHeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--main-green);

  a {
    text-decoration: none;
    margin: 0 0.8rem;
    color: var(--main-green);
    font-size: 18px;
    cursor: pointer;

    img {
      margin: -0.1rem 0.5rem;
    }
  }
`;

const HeaderContainer: React.FC<HeaderContainerProps> = ({ open, children }) => {
  return <StyledHeaderContainer open={open}>{children}</StyledHeaderContainer>;
};

export default HeaderContainer;
