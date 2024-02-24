import HomeHero from "@/components/HomeHero";
import Strategy from "@/components/Strategy";
import Image from "next/image";
import { PageWrapper } from "./page-wrapper";
import Efficiency from "@/components/Efficiency";
import Ramos from "@/components/Ramos";
import Info from "@/components/Info";

export default function Home() {
  return (
    <main>

    <PageWrapper>

      <HomeHero/>

      <Strategy/>

      <Efficiency/>

      <Ramos/>

      <Info/>

    </PageWrapper>
    </main>
  );
}
