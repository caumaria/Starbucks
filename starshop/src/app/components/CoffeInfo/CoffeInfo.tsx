import Image from "next/image";
import CoffePractice from "../../../../public/imgs/cafe_practices.jpg";
import NiveisTorra from "../../../../public/imgs/tipos_de_torra_1.jpg";
import JornadaCafe from "../../../../public/imgs/de_onde_vem_o_cafe.jpg";
import styled from "styled-components";

const CoffeInfoContainer = styled.footer`
  width: 100%;
  display: flex;
  cursor: pointer;

  section {
    flex: 1;
    height: 20rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
`;

const CoffeItem = styled.section`
  div {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 99;
    p {
      text-transform: uppercase;
      font-family: "Pike";
      font-weight: 700;
      font-size: 0.6rem;
      text-align: center;
      letter-spacing: 0.25em;
      margin-bottom: 1.2rem;
    }
    h4 {
      font-weight: 400;
      font-size: 1.5rem;
      font-family: "LanderGrande";
      line-height: 42px;
      text-align: center;
    }
  }
  img {
    transition: all 0.9s ease-in;
  }
  &:hover img {
    transform: scale(1.2);
  }
`;

export default function CoffeInfo() {
  return (
    <CoffeInfoContainer>
      <section>
        <CoffeItem>
          <div>
            <p>jornada do café</p>
            <h4>De onde vem o café?</h4>
          </div>
          <Image src={JornadaCafe} alt="" />
        </CoffeItem>
      </section>

      <section>
        <CoffeItem>
          <div>
            <p>preparação</p>
            <h4>Níveis de torra</h4>
          </div>
          <Image src={NiveisTorra} alt="" />
        </CoffeItem>
      </section>

      <section>
        <CoffeItem>
          <div>
            <p>sustentabilidade</p>
            <h4>C.A.F.E. Practices</h4>
          </div>
          <Image src={CoffePractice} alt="" />
        </CoffeItem>
      </section>
    </CoffeInfoContainer>
  );
}
