import MasterLife from "../components/MasterLife";
import Navbar from "../components/NavBar";
import EQbeatsIQ from "../components/EQbetasIQ";

import Footer from "../components/Footer";
import Openvacancies from "../components/Openvacancies";

import BeBestYou from "../components/BeBestYou";
import EverWonder from "../components/EverWonder";
import Test from "../components/Test";
import WorkWithUs from "../components/WorkWithUs";
import MeetAheadCard from "../components/MeetAheadCard";
import DoesThisSoundFamiliar from "../components/DoesThisSoundFamiliar";

import SelfImprovement from "../components/SelfImprovement";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <MasterLife />
      <EQbeatsIQ />
      <DoesThisSoundFamiliar />
      <MeetAheadCard />
      <SelfImprovement />
      <BeBestYou />
      <EverWonder />
      <Test />
      <WorkWithUs />
      <Openvacancies />
      <Footer />
    </>
  );
}
