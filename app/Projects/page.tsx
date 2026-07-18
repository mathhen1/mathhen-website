"use client"

import { useRouter } from "next/navigation"
import { listProjects } from "../Utils/projects"
import { ArrowLeftCircle } from "lucide-react"


const ProjectsPage = () => {
    const categoriesStyle = "animate-reveal peer-checked:bg-emerald-500 peer-checked:text-black p-2 border text-center bg-black text-emerald-500 font-black peer-checked:transition transition peer-checked:duration-500 duration-500"
    const router = useRouter()

    return (
        <div className="overflow-x-hidden w-screen min-h-screen flex flex-col gap-3 bg-black text-white font-mono">
            <div className="w-full flex flex-row items-center mt-5 mb-3">
                <span className="animate-reveal-r w-1/3 pl-3">
                    <ArrowLeftCircle onClick={() => router.back()} />
                </span>
                <h1 className="animate-reveal-l text-start pb-1 text-3xl font-black text-emerald-500">
                    Projetos
                </h1>
            </div>

            <p className="animate-reveal pl-4 tracking-tighter text-start text-sm">
                Conheça melhor <span className="font-black">todos</span> os meus <span className="text-emerald-400 font-black">projetos</span> em maiores detalhes
            </p>

            <span className="animate-reveal border-t w-3/4 mt-2 mb-2 self-center border-gray-400"></span>

            <span className="animate-pulse text-gray-600 self-center text-xs">
                &lt; arraste para os lados &gt;
            </span>

            <div className="bg-black h-full w-full flex flex-row gap-2 p-2 items-stretch overflow-x-auto 
            scrollbar-none snap-x snap-mandatory">

                {listProjects.map(p =>
                    <div key={p.id} className="animate-reveal w-11/12 border rounded-lg self-stretch
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

                    </div>
                )}

            </div>

            <span className="animate-reveal h-px w-3/4 border-t boder-gray-400 self-center"></span>

            <p className="animate-reveal-r text-center">
                Selecione os modelos de projeto
            </p>

            <div className="grid grid-cols-3 gap-2 text-xs w-10/12 self-center">
                <label className="block cursor-pointer">
                    <input type="radio" defaultChecked={true} name="btn" className="peer sr-only">
                    </input>
                    <p className={categoriesStyle}>
                        Todos
                    </p>
                </label>

                <label className="block cursor-pointer">
                    <input type="radio" name="btn" className="peer sr-only">
                    </input>
                    <p className={categoriesStyle}>
                        Web
                    </p>
                </label>

                <label className="block cursor-pointer">
                    <input type="radio" name="btn" className="peer sr-only">
                    </input>
                    <p className={categoriesStyle}>
                        Desktop
                    </p>
                </label>

                <label className="block cursor-pointer">
                    <input type="radio" name="btn" className="peer sr-only">
                    </input>
                    <p className={categoriesStyle}>
                        Automação
                    </p>
                </label>

                <label className="block cursor-pointer">
                    <input type="radio" name="btn" className="peer sr-only">
                    </input>
                    <p className={categoriesStyle}>
                        IA
                    </p>
                </label>

                <label className="block cursor-pointer">
                    <input type="radio" name="btn" className="peer sr-only">
                    </input>
                    <p className={categoriesStyle}>
                        Mobile
                    </p>
                </label>

            </div>
        </div>
    )
}

export default ProjectsPage