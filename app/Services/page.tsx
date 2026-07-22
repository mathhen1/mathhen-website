"use client"

import { ArrowLeftCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import NavBar from "../Components/NavBar"

const Services = () => {
    const router = useRouter()
    return (
        <div className="flex flex-col text-white lg:font-roboto lg:tracking-widest">
            <NavBar />
            <div className="h-[90vh] relative flex flex-col items-center justify-center">
                <ArrowLeftCircle onClick={() => router.back()} className="absolute top-2 left-2 hover:cursor-pointer"/>
                <h1 className="animate-pulse font-black text-xl lg:text-3xl">
                    Ainda em construção...
                </h1>
            </div>
        </div>
    )
}

export default Services