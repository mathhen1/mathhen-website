"use client"

import { Home, Laptop, Menu, StickyNoteCheck, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { scrollTo } from "../Utils/funcs"
import { linkWpp } from "../Utils/links"

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const menuIsOpen = menuOpen ? "block" : "hidden"
    const router = useRouter()

    const handleMenu = () => {
        if (menuOpen === true) {
            setMenuOpen(false)
        }

        if (menuOpen === false) {
            setMenuOpen(true)
        }
    }

    return (
        <div className="animate-hero relative sticky z-10 top-0 h-12 flex flex-row gap-2 bg-black text-white">
            <div className="flex flex-row items-center w-11/12">
                <h3 className="text-2xl font-black tracking-wider max-lg:flex-1 lg:w-1/2 pl-2 lg:pl-5 p-2">
                    <a href="/">
                        dev mathen
                    </a>
                </h3>

                {/* Mobile Bar */}

                <Menu className="lg:hidden" onClick={handleMenu} />

                {/* Desktop Bar */}

                <ul className="hidden lg:flex lg:flex-row lg:gap-10">
                    <li>
                        <span className="group transition-all duration-300 hover:cursor-pointer hover:text-emerald-500" onClick={() => {
                            const a = scrollTo("homepage")
                            if(a === false) {
                                router.push("/")
                            }
                            }}>
                            HomePage
                            <span className="block w-0 h-0.5 bg-emerald-500 transition-all duration-500 group-hover:w-full"></span>
                        </span>
                    </li>

                    <li>
                        <span className="group transition-all duration-300 hover:cursor-pointer hover:text-emerald-500" onClick={() => router.push("/Projects")}>
                            Projetos
                            <span className="block w-0 h-0.5 bg-emerald-500 transition-all duration-500 group-hover:w-full"></span>
                        </span>
                    </li>

                    <li>
                        <span className="group transition-all duration-300 hover:cursor-pointer hover:text-emerald-500" onClick={() => router.push("/Services")}>
                            Serviços
                            <span className="block w-0 h-0.5 bg-emerald-500 transition-all duration-500 group-hover:w-full"></span>
                        </span>
                    </li>
                </ul>

            </div>

            {/* Menu Mobile */}

            <div className={"absolute z-20 backdrop-blur w-full flex flex-col text-white items-center h-screen top-0 right-0 " + menuIsOpen}>
                <div className="absolute w-3/4 flex flex-col text-white items-center bg-black h-screen top-0 right-0 p-2 gap-5">
                    <X className="mt-2" onClick={() => setMenuOpen(false)} />

                    <div className="flex flex-col sm:flex-row gap-5 items-center sm:justify-center">
                        <img src="hero-mathen.jpg" alt=""
                            className="w-2/3 sm:w-1/4 rounded-full border-2" />

                        <span className="sm:hidden w-1/2 h-px border-b border-gray-400"></span>


                        <ul className="text-base flex flex-col gap-3 text-lg items-center font-extralight font-mono">
                            <span onClick={() => {
                                scrollTo("homepage")
                                setMenuOpen(false)
                            }} className="flex flex-row gap-2">
                                Homepage <Home className="w-5" />
                            </span>

                            <span onClick={() => {
                                router.push("/Projects")
                                setMenuOpen(false)
                            }} className="flex flex-row gap-2">
                                Projetos <StickyNoteCheck className="w-5" />
                            </span>
                            <span onClick={() => {
                                router.push("/Services")
                                setMenuOpen(false)
                            }} className="flex flex-row gap-2">
                                Serviços <Laptop className="w-5" />
                            </span>
                        </ul>

                        <span className="sm:hidden w-1/2 h-px border-b border-gray-400"></span>

                        <Logo />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5 items-center w-full sm:w-3/4 sm:justify-center">

                        <a href={linkWpp} target="_blank" className="bg-white text-black rounded-4xl p-2 w-1/2 text-center text-xs font-black">
                            Fale comigo
                        </a>

                        <p className="text-white text-sm font-roboto font-bold w-11/12 text-wrap text-center p-2">
                            developed by <br /> <span className="text-emerald-500 font-bold">&lt;&lt; me &gt;&gt;</span>
                        </p>

                        <span className="sm:hidden w-10/12 border-t h-px border-gray-300"></span>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavBar

const Logo = () => {
    return (
        <div className="w-full sm:w-max text-center flex flex-col items-center">
            <h1 className="font-nz font-black text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-300 to-slate-400">
                Mathhen
            </h1>
            <h2 className="text-sm font-roboto tracking-tight">
                <span className="text-gray-100">Fullstack</span> <span className="font-black text-emerald-400">Developer</span>
            </h2>
        </div>
    )
}