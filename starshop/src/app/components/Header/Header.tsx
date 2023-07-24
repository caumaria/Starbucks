import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1440px;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
      margin: 0 0.8rem;
      color: var(--main-green);
      font-size: 18px;

      img {
        margin: -0.1rem 0.5rem;
      }
    }
  }
`;

const Header = ({ ...props }) => {
  return (
    <HeaderContainer className={props.className}>
      {props.children}
    </HeaderContainer>
  );
};

export default Header;
