import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchIcon from "../../../../../public/search-icon.svg";


export default function Search() {
  return (
    <Link href="/search">
      Pesquisar
      <Image src={SearchIcon} alt="Search Icon"></Image>
    </Link>
  );
}
