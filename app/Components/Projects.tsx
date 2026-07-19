import { ArrowRightSquare, ArrowUpRightSquare } from "lucide-react"
import { listProjects } from "../Utils/projects"
import { useRouter } from "next/navigation"

const Projects = () => {
    const router = useRouter()
    return (
        <div className="flex flex-col gap-3 font-mono tracking-tighter bg-white text-black">
            <h1 className="reveal-l opacity-0 text-3xl pl-2 border-l-3 ml-2 font-bold">
                Projetos
            </h1>

            <p className="reveal opacity-0 text-xs text-gray-800 self-center">
                <span className="animate-pulse">
                    Confira alguns dos meus projetos
                </span>
            </p>

            <div className="grid grid-row-2 gap-3 mb-6">
                <div className="reveal-r opacity-0 flex flex-col items-center gap-2 justify-center w-11/12 
                border place-self-center bg-black text-white rounded-md">
                    <img src={listProjects[0].src} alt="" className="rounded-xl p-2" />

                    <h1>
                        {listProjects[0].name}
                    </h1>

                    <p className="self-start text-start font-sans tracking-tight w-3/4 pl-3">
                        {listProjects[0].desc}
                    </p>

                    <ul className="mt-1 mb-1 self-start pl-3 grid grid-flow-col grid-[4, max-content] gap-2">
                        {listProjects[0].stack.map(item =>
                            <p key={item.id} className="text-xs p-1 pr-2 pl-2 border border-b-2 border-l-2 -skew-x-5">
                                {item.title}
                            </p>
                        )}
                    </ul>

                    <SeeMore />
                </div>

                <div className="reveal-l opacity-0 flex flex-col items-center gap-2 justify-center w-11/12 
                border place-self-center bg-black text-white rounded-md">
                    <img src={listProjects[2].src} alt="" className="rounded-xl p-2" />

                    <h1>
                        {listProjects[2].name}
                    </h1>

                    <p className="self-start text-start font-sans tracking-tight w-3/4 pl-3">
                        {listProjects[2].desc}
                    </p>

                    <ul className="mt-1 mb-1 self-start pl-3 grid grid-flow-col grid-[4, max-content] gap-2">
                        {listProjects[2].stack.map(item =>
                            <p key={item.id} className="text-xs p-1 pr-2 pl-2 border border-b-2 border-l-2 -skew-x-5">
                                {item.title}
                            </p>
                        )}
                    </ul>

                    <SeeMore />
                </div>
            </div>

            <span onClick={() => router.push("/Projects")} className="reveal opacity-0 border-2 border-b-4 p-2 w-10/12 self-center font-roboto font-black text-sm mb-10 flex flex-row justify-center items-center gap-2">
                Ver todos os projetos <ArrowRightSquare className="w-5" />
            </span>

        </div>
    )
}

export default Projects

const SeeMore = () => {
    return (
        <a className="flex flex-row items-center self-end pr-3 gap-2 
                    text-emerald-500 font-sans font-semibold tracking-wider text-sm mb-2">
            Veja mais aqui <ArrowUpRightSquare className="w-5" />
        </a>
    )
}