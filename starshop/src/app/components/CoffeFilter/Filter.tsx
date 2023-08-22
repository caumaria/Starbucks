import * as React from "react";
import styled from "styled-components";
import Container from "../Container";

export interface FilterProps {}

const FilterList = styled.ul`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;

  li {
    list-style: none;
    color: var(--main-green);
    letter-spacing: 0.02em;
    line-height: 30px;
    font-size: 18px;
    margin: 0 18px 0 7px;
    cursor: pointer;
    padding-bottom: 3px;
    text-transform: none;
  }

  :hover {
    border-bottom: solid 2px #006241;
  }

  :nth-child(1) {
    color: var(--secondary-green);
    border-bottom: solid 2px #006241;
  }
`;


export default function Filter(props: FilterProps) {
  return (
    <FilterList>
      <li>Filtrar por:</li>
      <li>Tipo de Café</li>
      <li>Tipo de Torra</li>
      <li>Origem</li>
    </FilterList>
  );
}
