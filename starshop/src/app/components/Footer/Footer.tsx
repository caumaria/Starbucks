import * as React from "react";
import styled from "styled-components";
import Image from "next/image";
import BrasilIcon from "../../../../public/imgs/brazil_icon.gif";
import WorldIcon from "../../../../public/imgs/World.png";
import InstagramIcon from "../../../../public/imgs/Instagram.png";
import FacebookIcon from "../../../../public/imgs/Facebook.png";
import YoutubeIcon from "../../../../public/imgs/Youtube.png";
import WhatsappIcon from "../../../../public/imgs/whats.png";
import LogoFooter from "../../../../public/imgs/logo-footer.png";
import CoffeInfo from "../CoffeInfo/CoffeInfo";

const FooterContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--main-green);
  font-family: "SoDoSans", sans-serif;
  font-weight: 600;
  font-size: 0.64rem;
  line-height: 28px;
  color: white;
  gap: 1rem;
  padding: 1rem;
  position: relative;

  .first {
    position: absolute;
    top: -10%;
  }

  img,
  a,
  p {
    cursor: pointer;
  }

  p,
  span {
    opacity: 0.52;
    color: white;
  }
  span {
    font-size: 11px;
    text-align: center;
  }
  div {
    display: flex;
    gap: 2rem;
  }
`;

const MiddleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
  div {
    display: flex;
    gap: 1rem;
  }
  section {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  @media (max-width: 1000px) {
    width: 460px;
    gap: 3.4rem;
    padding-left: 2.5rem;
    flex-direction: row;
    align-items: first baseline;
    div {
      gap: 0;
      flex-direction: column;
    }
  }
`;

export default function Footer() {
  return (
    <>
      <CoffeInfo />
      <FooterContainer>
        <Image src={LogoFooter} alt="" className="first" />

        <MiddleSection>
          <div>
            <a>Sobre a Starbucks</a>
            <a>Contato</a>
            <section>
              <Image src={WorldIcon} alt="World Icon" />
              <span>|</span>
              <Image src={BrasilIcon} alt="Brazil's Icon" />
            </section>
          </div>

          <div>
            <a>Cookies</a>
            <a>Política de Privacidade</a>
            <a>Termos e Condições de uso</a>
            <a>Regulamento das Promoções</a>
            <a>FAQs</a>
            <a>Starbucks.com.br</a>
          </div>
        </MiddleSection>

        <div>
          <Image src={InstagramIcon} alt="Instagram Icon" />
          <Image src={FacebookIcon} alt="Facebook Icon" />
          <Image src={YoutubeIcon} alt="Youtube Icon" />
          <Image src={WhatsappIcon} alt="WhatsappIcon" />
        </div>

        <span>
          A Nestlé usa as marcas registradas da Starbucks sob licença. Pike
          Place é uma marca registrada do Pike Place Market PDA, usado sob
          licença. Nespresso e NESCAFÉ Dolce Gusto são marcas registradas da
          Société des Produits Nestlé S.A.. Todas as outras marcas são de
          propriedade de seus proprietários.
        </span>
      </FooterContainer>
    </>
  );
}
