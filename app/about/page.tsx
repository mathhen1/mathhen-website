"use client"

import { ArrowLeftCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import { linkWpp } from "../Utils/links"
import { useEffect, useRef } from "react"

const Services = () => {
    const router = useRouter()
    const rootRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const obs = new IntersectionObserver(entries => entries.forEach(entry => {
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
        }))
        if (rootRef.current) {
            const root = rootRef.current.querySelectorAll(".reveal, .reveal-r, .reveal-l")
            root.forEach(e => obs.observe(e))
        }
    }, [])

    return (
        <div ref={rootRef} className="w-screen flex flex-col bg-black text-white lg:font-roboto">
            <NavBar />
            <div className="min-h-[90vh] relative flex flex-col gap-3 lg:tracking-wide">

                <div className="">
                    <ArrowLeftCircle onClick={() => router.back()} className="absolute top-1 left-3 hover:cursor-pointer z-2" />
                    <h1 className="reveal opacity-0 text-2xl font-black text-emerald-600 text-center w-full mb-4">
                        Sobre mim
                    </h1>
                </div>

                

                <span className="reveal opacity-0 hidden lg:block w-1/2 border-t border-gray-500 self-center"></span>
            </div>
            <Footer />
        </div>
    )
}

export default Services

const GetWebsite = (props: any) => {
    return (
        <a href={linkWpp} className="reveal opacity-0 mt-2 mb-5 w-10/12 sm:w-2/3 lg:w-1/3 -ml-4 self-center text-center font-roboto font-extrabold p-3 outline text-sm outline-2 text-red-500 bg-black text-nowrap
        hover:bg-emerald-500 hover:text-black">
            <span className="animate-pulse">
                {props.text}
            </span>
        </a>
    )
}