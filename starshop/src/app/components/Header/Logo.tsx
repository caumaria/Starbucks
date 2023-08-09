import * as React from "react";
import Image from "next/image";
import LogoStarbucks from "../../../../public/logo.png";
import Link from "next/link";
import styled from "styled-components";

const LogoContainer = styled.div`


`;

export default function Logo() {
  return (
    <LogoContainer>
      <Link href="/">
        <Image src={LogoStarbucks} alt="logo Starbucks"></Image>
      </Link>
    </LogoContainer>
  );
}
