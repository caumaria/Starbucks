import Link from "next/link";
import NespressoImg from "../../../../public/sectionMenu1.png";
import styled from "styled-components";
import Image from "next/image";
import SectionMenu1 from "/public/sectionMenu1.png";
import SectionMenu2 from "/public/sectionMenu2.png";
import SectionMenu3 from "/public/sectionMenu3.png";

const OpenFilterContaier = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #d4e9e2;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    height: auto;
  }
`;

const FilterCard = styled.a`
  max-width: 170px;
  height: 240px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem 0;
  text-decoration: none;


  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    color: #1e3932;
    font-size: 1rem;
    text-transform: none;
    min-height: 40px;
    width: 100%;
    text-align: center;
    padding: 0 0.8rem;
  }
`;

export default function OpenFilter() {
  return (
    <OpenFilterContaier>
      
      <FilterCard href="/nespresso">
        <div>
        <Image src={SectionMenu1} alt="Nespresso Icon"></Image>
        </div>
        <p>Starbucks® by Nespresso®</p>
      </FilterCard>

      <FilterCard href="/nescafe">
        <div>
        <Image src={SectionMenu2} alt="Nescafe Icon"></Image>
        </div>
        <p>Starbucks® by NESCAFÉ® Dolce Gusto®</p>
      </FilterCard>

      <FilterCard href="/torrado">
        <div>
        <Image src={SectionMenu3} alt="Torrado Icon"></Image>
        </div>
        <p>Café Torrado Moído</p>
      </FilterCard>
    </OpenFilterContaier>
  );
}
