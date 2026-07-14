"use client"

import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Services from "./Components/Services";
import { useEffect, useState } from "react";
import Intro from "./Components/Intro";

export default function Home() {

  const [useIntro, setUseIntro] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setUseIntro(false)
    }, 2500);
  }, [])

  if (useIntro) {
    return (
      <Intro />
    )
  }

  return (
    <div className="relative h-full w-screen flex flex-col">
      <NavBar />
      <AboutMe />
      <Services />
    </div>
  );
}
