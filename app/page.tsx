import Image from "next/image";
import styles from "./page.module.css";
import TopSection from "@/components/topSection/top";
import PacKages from "@/components/packges/packges";
import OnlineEducation from "@/components/online/online";
import WatchSection from "@/components/watch/watch";
import ClientSection from "@/components/clientsection/client";
import JoinUS from "@/components/joinUS/join";
import FooterSection from "@/components/footer/footer";

export default function Home() {
  return (
    <div>
      <TopSection />
      <PacKages />
      <OnlineEducation />
      <WatchSection />
      <ClientSection />
      <JoinUS />
      <FooterSection />
    </div>
  );
}
