import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Services from "./Components/Services";
import MoreAboutMe from "./Components/MoreAboutMe";
import MoreService from "./Components/MoreService";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import CinematicIntro from "./Components/CinematicIntro";
import HomeRevealObserver from "./Components/HomeRevealObserver";

export default function Home() {
  return (
    <div className="relative flex h-full w-screen flex-col lg:font-roboto">
      <CinematicIntro />
      <HomeRevealObserver />
      <NavBar />
      <main>
        <AboutMe />
        <MoreAboutMe />
        <Projects />
        <Services />
        <MoreService />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
