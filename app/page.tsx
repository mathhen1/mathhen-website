"use client"

import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Services from "./Components/Services";
import { useEffect, useState } from "react";
import Intro from "./Components/Intro";
import MoreAboutMe from "./Components/MoreAboutMe";
import MoreService from "./Components/MoreService";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";

export default function Home() {

  const [useIntro, setUseIntro] = useState<boolean>(true)

  useEffect(() => {

    const root = document.querySelectorAll(".reveal, .reveal-r, .reveal-l")

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("reveal")) {
            entry.target.classList.add("animate-reveal")
          }
          if (entry.target.classList.contains("reveal-r")) {
            entry.target.classList.add("animate-reveal-r")
          }
          if (entry.target.classList.contains("reveal-l")) {
            entry.target.classList.add("animate-reveal-l")
          }
        }
      })
    }, { threshold: 0.8 })

    root.forEach(node => {
      obs.observe(node)
    })
    setTimeout(() => {
      setUseIntro(false)
    }, 2200);
  }, [useIntro])

  if (useIntro) {
    return (
      <Intro />
    )
  }
  return (
    <div className="relative h-full w-screen flex flex-col">
      <NavBar />
      <AboutMe />
      <MoreAboutMe />
      <Projects />
      <Services />
      <MoreService />
      <Contact />
      <Footer />
    </div>
  );
}
