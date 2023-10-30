import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchIcon from "../../../../../public/search-icon.svg";
import styled from "styled-components";

const SearchContainer = styled.div`
  padding: 0;

  a {
    margin: 0;
  }

  @media (max-width: 1000px) {
    width: 100px;
    span {
      display: none;
    }
  }
`;

export default function Search() {
  return (
    <SearchContainer>
      <Link href="/search">
        <span>
        Pesquisar
        </span>
        <Image src={SearchIcon} alt="Search Icon"></Image>
      </Link>
    </SearchContainer>
  );
}
