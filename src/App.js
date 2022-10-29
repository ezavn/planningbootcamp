import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Scale from "./components/Scale";
import SlideShow from "./components/SlideShow";
import Slogan from "./components/Slogan";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reason from "./components/Reason";
import Coach from "./components/Coach";
import Agenda from "./components/Agenda";
import Work from "./components/Work";
import Ticket from "./components/Ticket";
import Place from "./components/Place";
import Footer from "./components/Footer";
import Countdown from "./components/common/Countdown";
import { PopupProvider } from "./contexts/popupContext";
import PopupRegister from "./components/common/PopupRegister";
import BackToTop from "./components/common/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <PopupProvider>
        <Header></Header>
        <Hero></Hero>
        <Slogan></Slogan>
        <Intro></Intro>
        <Scale></Scale>
        <SlideShow></SlideShow>
        <Reason></Reason>
        <Coach></Coach>
        <Agenda></Agenda>
        <Work></Work>
        <Ticket></Ticket>
        <Place></Place>
        <Footer></Footer>
        <PopupRegister></PopupRegister>
        <BackToTop></BackToTop>
        <Countdown></Countdown>
      </PopupProvider>
    </>
  );
}

export default App;
