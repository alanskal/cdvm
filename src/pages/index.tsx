// Modules & Styles
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// Composants
import {EmblaCarousel} from "@/components/Carousel";
import SectionCollection from "@/components/SectionCollection";
import IntroBoutique from "@/components/IntroBoutique";
import EventsComing from "@/components/EventsComing";
import NosPartenaires from "@/components/NosPartenaires";
import JoinUs from "@/components/JoinUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Conservatoire de la mode vintage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <EmblaCarousel/>
        <SectionCollection/>
        {/* <IntroBoutique /> */}
        <EventsComing/>
        <NosPartenaires/>
        <JoinUs/>
      </main>

    </>
  );
}
