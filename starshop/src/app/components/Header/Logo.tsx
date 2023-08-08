import * as React from "react";
import Image from "next/image";
import LogoStarbucks from "../../../../public/logo.png";
import Link from "next/link";
import styled from "styled-components";


export default function Logo() {
  return (
      <Link href="/">
        <Image
          src={LogoStarbucks}
          alt="logo Starbucks"
          style={{ marginTop: ".2rem" }}
        ></Image>
      </Link>
  );
}
