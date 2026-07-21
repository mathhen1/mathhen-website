"use client"

import { ArrowLeftCircle } from "lucide-react"
import { useRouter } from "next/navigation"

const Services = () => {
    const router = useRouter()
    return (
        <div className="h-screen flex items-center justify-center text-white lg:font-roboto lg:tracking-widest">
            <ArrowLeftCircle onClick={() => router.push("/")} className="absolute top-5 left-2"/>
            <h1 className="animate-pulse font-black text-xl lg:text-3xl">
                Ainda em construção...
            </h1>
        </div>
    )
}

export default Services