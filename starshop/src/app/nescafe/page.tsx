"use client";
import items from "../data/items.json";
import Container from "app/components/Container";
import ProductCard from "app/components/Shop/ProductCard";
import { CardContainer, ShopContainer } from "app/components/Shop/Shop";
import Image from "next/image";
import styled from "styled-components";
import PicNescafe from "../../../public/imgs/nescafeBig.jpg";
import NescafeCup from "../../../public/imgs/icon_nescafeBig.png";
import TextFilter from "./TextFilter";
import CoffeFilter from "app/components/CoffeFilter/CoffeFilter";
import { CafeContainer } from "./CofeConteiner";
import PicContainerPages from "./PicContainerPages";


export default function Nescafe() {
  return (
    <div>
      <CafeContainer>
        <PicContainerPages>
          <TextFilter 
          title="Starbucks® by NESCAFÉ® Dolce Gusto®" 
          description="Inspiradas pelas bebidas Starbucks® que você adora para que
          você prepare em sua máquina NESCAFÉ® Dolce Gusto® em sua casa."/>
          <section>
            <Image src={NescafeCup} alt="Nescafe cup" />
            <Image src={PicNescafe} alt="Nescafe" />
          </section>
        </PicContainerPages>
      </CafeContainer>

      <CoffeFilter />

      <ShopContainer>
        <CardContainer>
          {items
            .filter((item) => item.by === "by NESCAFÉ® Dolce Gusto®")
            .map((item) => (
              <Container width={"300px"} key={item.id}>
                <ProductCard {...item} />
              </Container>
            ))}
        </CardContainer>
      </ShopContainer>
    </div>
  );
}
