"use client";
import items from "../data/items.json";
import Container from "app/components/Container";
import ProductCard from "app/components/Shop/ProductCard";
import { CardContainer, ShopContainer } from "app/components/Shop/Shop";
import TextFilter from "app/nescafe/TextFilter";
import Image from "next/image";
import PicRoasted from "../../../public/imgs/roastedBig.jpg";
import RoastedCup from "../../../public/imgs/icon_groundBig.png";
import CoffeFilter from "app/components/CoffeFilter/CoffeFilter";
import { CafeContainer } from "app/nescafe/CofeConteiner";
import PicContainerPages from "app/nescafe/PicContainerPages";

export default function Torrado() {
  return (
    <div>
      <CafeContainer>
        <PicContainerPages>
          <TextFilter
            title="Café Torrado Moído"
            description="Aprecie um café delicioso e fresco preparado em sua casa com grãos de cafés selecionados Starbucks®."
          />
          <section>
            <Image src={RoastedCup} alt="Nescafe cup" />
            <Image src={PicRoasted} alt="Nescafe" />
          </section>
        </PicContainerPages>
      </CafeContainer>

      <CoffeFilter />

      <ShopContainer>
        <CardContainer>
          {items
            .filter((item) => item.by === "Café Torrado Moído")
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
