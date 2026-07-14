"use client"

import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Services from "./Components/Services";
import { useEffect, useState } from "react";
import Intro from "./Components/Intro";
import MoreAboutMe from "./Components/MoreAboutMe";

export default function Home() {

  const [useIntro, setUseIntro] = useState<boolean>(true)

  useEffect(() => {

    const root = document.querySelectorAll(".reveal")

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-reveal")
          console.log(entry.target.classList)
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
      <Services />
    </div>
  );
}
