"use client"

import { useRouter } from "next/navigation"
import { listProjects } from "../Utils/projects"
import { ArrowLeftCircle } from "lucide-react"
import Footer from "../Components/Footer"
import React, { useEffect, useRef, useState } from "react"
import NavBar from "../Components/NavBar"

const ProjectsPage = () => {
    const [list, setList] = useState<any>(listProjects)
    const rootRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setList(list)

        const obs = new IntersectionObserver(entries => entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("reveal")) entry.target.classList.add("animate-reveal")

                if (entry.target.classList.contains("reveal-r")) entry.target.classList.add("animate-reveal-r")

                if (entry.target.classList.contains("reveal-l")) entry.target.classList.add("animate-reveal-l")
            }
        }))

        if (rootRef.current) {
            const root = rootRef.current.querySelectorAll(".reveal, .reveal-r, .reveal-l")
            root.forEach(node => {
                obs.observe(node)
            })

        }
    }, [list])

    const filterList = (e: React.PointerEvent<HTMLInputElement>) => {
        const refreshedList = listProjects.filter(p => p.category.includes(e.currentTarget.value.toLowerCase()))
        setList(refreshedList)
        console.log(refreshedList)

        if (e.currentTarget.value.includes("Todos")) setList(listProjects)
    }

    const categoriesStyle = "animate-reveal block peer-checked:bg-emerald-500 peer-checked:text-black p-2 border text-center bg-black text-emerald-500 font-black peer-checked:transition transition peer-checked:duration-500 duration-500 transition-all hover:bg-emerald-500 hover:text-black"
    const router = useRouter()

    return (
        <div ref={rootRef} className="overflow-x-hidden w-screen min-h-screen flex flex-col gap-3 bg-black text-white font-mono">
            <NavBar />
            <div className="w-full flex flex-row items-center sm:justify-center mb-3">
                <span className="animate-reveal-r w-1/3 pl-3 sm:w-max sm:absolute sm:left-3 hover:cursor-pointer">
                    <ArrowLeftCircle onClick={() => router.back()} />
                </span>
                <h1 className="animate-reveal-l text-start pb-1 text-3xl font-black text-emerald-500">
                    Projetos
                </h1>
            </div>

            <p className="animate-reveal pl-4 tracking-tighter text-start sm:text-center text-sm">
                Conheça melhor <span className="font-black">todos</span> os meus <span className="text-emerald-400 font-black">projetos</span> em maiores detalhes
            </p>

            <span className="animate-reveal border-t w-3/4 sm:w-2/3 lg:w-1/4 mt-2 self-center border-gray-400"></span>

            <p className="animate-reveal-r font-extralight text-center pl-4 text-xs w-10/12 self-center">
                Filtro de categorias
            </p>

            <div className="grid grid-cols-3 gap-2 text-xs w-10/12 sm:w-2/3 lg:w-1/3 self-center">
                <label className="block cursor-pointer">
                    <input type="radio" defaultChecked={true} value={"Todos"} onClick={filterList} name="btn" className="peer sr-only">
                    </input>
                    <span className={categoriesStyle}>
                        Todos
                    </span>
                </label>

                <label className="block cursor-pointer">
                    <input type="radio" name="btn" value={"Web"} onClick={filterList} className="peer sr-only">
                    </input>
                    <span className={categoriesStyle}>
                        Web
                    </span>
                </label>

                <label className="block cursor-pointer">
                    <input type="radio" name="btn" value={"Desktop"} onClick={filterList} className="peer sr-only">
                    </input>
                    <span className={categoriesStyle}>
                        Desktop
                    </span>
                </label>

                <label className="block cursor-pointer">
                    <input type="radio" name="btn" value={"VibeCoding"} onClick={filterList} className="peer sr-only">
                    </input>
                    <span className={categoriesStyle} >
                        VibeCoding
                    </span>
                </label>

                <label className="block cursor-pointer">
                    <input type="radio" name="btn" value={"IA"} onClick={filterList} className="peer sr-only">
                    </input>
                    <span className={categoriesStyle}>
                        IA
                    </span>
                </label>

                <label className="block cursor-pointer">
                    <input type="radio" name="btn" value={"Mobile"} onClick={filterList} className="peer sr-only">
                    </input>
                    <span className={categoriesStyle}>
                        Mobile
                    </span>
                </label>

            </div>

            <span className="animate-reveal border-t w-3/4 mt-2 mb-2 self-center border-gray-400"></span>

            <span className="animate-pulse text-gray-600 self-center text-xs">
                &lt; arraste para os lados &gt;
            </span>

            <div className="bg-black h-full w-full sm:w-10/12 sm:self-center flex flex-row gap-2 p-2 items-stretch overflow-x-auto overflow-y-hidden scrollbar-none snap-x snap-mandatory 
            lg:grid lg:grid-cols-3 lg:justify-items-center lg:p-0">

                {list.map(p =>
                    <div key={p.id} className="animate-reveal w-11/12 sm:w-5/6 lg:w-full border rounded-lg self-stretch
                    flex-shrink-0 snap-center snap-always border
                    flex flex-col gap-3 p-2 bg-white text-black">

                        <img src={p.src} alt="" className="animate-reveal border rounded-md" />

                        <h1 className="animate-reveal-r self-center font-black tracking-wide text-sm">
                            {p.name}
                        </h1>
                        <p className="animate-reveal-l text-xs font-semibold">
                            {p.desc}
                        </p>

                        <ul className="pl-2 grid grid-flow-col grid-[3,max-content] justify-start gap-2 w-3/4 text-center">
                            {p.stack.map(node =>
                                <p key={node.id} className="animate-reveal text-xs p-1 pr-2 pl-2 -skew-x-5 border-2 border-b-3 border-r-3 bg-gray-200 font-bold">
                                    {node.title}
                                </p>
                            )}
                        </ul>

                        <p className="pl-2 ml-2 text-sm font-bold p-1 border-2 border-b-4 border-l-4 w-max">
                            categoria do sistema: <span className="font-black text-base tracking-widest">{p.category}</span>
                        </p>

                    </div>
                )}

            </div>

            <span className="animate-reveal h-px w-3/4 border-t boder-gray-400 self-center mb-5 mt-5"></span>

            <Footer />
        </div>
    )
}

export default ProjectsPage