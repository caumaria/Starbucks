"use client";
import items from "../data/items.json";
import Container from "app/components/Container";
import ProductCard from "app/components/Shop/ProductCard";
import { CardContainer, ShopContainer } from "app/components/Shop/Shop";
import PicNespresso from "../../../public/imgs/nespressoBig.jpg";
import NespressoCup from "../../../public/imgs/nespressoIconBig.png";
import TextFilter from "app/nescafe/TextFilter";
import Image from "next/image";
import CoffeFilter from "app/components/CoffeFilter/CoffeFilter";
import { CafeContainer } from "app/nescafe/CofeConteiner";
import PicContainerPages from "app/nescafe/PicContainerPages";

export default function Nespresso() {
  return (
    <div>
      <CafeContainer>
        <PicContainerPages>
          <TextFilter
            title="Starbucks® by Nespresso®"
            description="Reserve um momento para um delicioso e autêntico espresso Starbucks® preparados em sua máquina Nespresso®."
          />
          <section>
            <Image src={NespressoCup} alt="Nescafe cup" />
            <Image src={PicNespresso} alt="Nescafe" />
          </section>
        </PicContainerPages>
      </CafeContainer>

      <CoffeFilter />

      <ShopContainer>
        <CardContainer>
          {items
            .filter((item) => item.by === "by Nespresso®")
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
