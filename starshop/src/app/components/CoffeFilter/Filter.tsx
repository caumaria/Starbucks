import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import OpenFilter from "./OpenFilter";

const FilterContainer = styled.section`
  width: 100%;

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1rem;
    position: relative;
    left: 76%;
  }
`;

const FilterList = styled.ul`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  gap: 2rem;
  padding: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 500px) {
    overflow-x: scroll;
    padding-left: 10rem;
  }

  li {
    min-width: max-content;
    list-style: none;
    color: var(--main-green);
    letter-spacing: 0.02em;
    line-height: 30px;
    font-size: 18px;
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

export default function Filter() {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <FilterContainer>
      <FilterList>
        <li onClick={() => setOpenFilter(!openFilter)}>Filtrar por:</li>
        <li onClick={() => setOpenFilter(!openFilter)}>Tipo de Café</li>
        <li>Tipo de Torra</li>
        <li>Origem</li>
      </FilterList>
      {openFilter ? (
        <>
          <section>
            <button onClick={() => setOpenFilter(!openFilter)}>Fechar</button>
          </section>
          <OpenFilter />
        </>
      ) : null}
    </FilterContainer>
  );
}
