import { useRouter } from "next/navigation"
import { scrollTo } from "../Utils/funcs"

const Footer = () => {
    const year = new Date().getFullYear()
    const router = useRouter()

    return (
        <div className="bg-white text-black font-mono flex flex-col p-2 lg:gap-2">

            <Logo />

            <div className="flex flex-col sm:flex-row lg:flex-col lg:w-3/4 lg:self-center">
                <div className="flex flex-col lg:items-center gap-2 p-2 tracking-tight sm:w-1/2">

                    <h1 className="border-l-2 pl-2 font-semibold">
                        Links de Navegação
                    </h1>

                    <ul className="flex flex-col lg:flex-row w-max text-sm pl-2 gap-2">
                        <span className="max-lg:border-b group hover:text-emerald-800 hover:cursor-pointer" onClick={() => {
                            const a = scrollTo("homepage")
                            if (a === false) {
                                router.push("/")
                            }
                        }}>
                            Homepage
                            <span className="block h-0.5 w-0 bg-emerald-800 transition-all group-hover:w-full group-hover:cursor-pointer"></span>
                        </span>
                        <span className="max-lg:border-b group hover:text-emerald-800 hover:cursor-pointer" onClick={() => router.push("/Projects")}>
                            Projetos
                            <span className="block h-0.5 w-0 bg-emerald-800 transition-all group-hover:w-full"></span>
                        </span>
                        <span className="max-lg:border-b group hover:text-emerald-800 hover:cursor-pointer">
                            Serviços
                            <span className="block h-0.5 w-0 bg-emerald-800 transition-all group-hover:w-full"></span>
                        </span>
                    </ul>
                </div>

                <span className="sm:hidden lg:block h-px w-11/12 lg:w-3/4 border-t border-gray-400 self-center mb-2 mt-2"></span>

                <div className="tracking-tighter flex flex-col lg:items-center gap-2 p-2 sm:w-1/2">

                    <h1 className="border-l-2 pl-2 font-semibold">
                        Links para Contato
                    </h1>

                    <ul className="flex flex-col lg:flex-row w-max text-sm pl-2 gap-2">
                        <span className="max-lg:border-b group hover:text-emerald-800 hover:cursor-pointer">
                            Instagram
                            <span className="block h-0.5 w-0 bg-emerald-800 transition-all group-hover:w-full group-hover:cursor-pointer"></span>
                        </span>
                        <span className="max-lg:border-b group hover:text-emerald-800 hover:cursor-pointer">
                            WhatsApp
                            <span className="block h-0.5 w-0 bg-emerald-800 transition-all group-hover:w-full group-hover:cursor-pointer"></span>
                        </span>
                        <span className="max-lg:border-b group hover:text-emerald-800 hover:cursor-pointer">
                            Linkedin
                            <span className="block h-0.5 w-0 bg-emerald-800 transition-all group-hover:w-full group-hover:cursor-pointer"></span>
                        </span>
                    </ul>
                </div>
            </div>

            <span className="h-px w-3/4 lg:w-1/3 self-center border-t mt-2 mb-2 border-black"></span>

            <div className="flex flex-col items-center">
                <p className="hidden lg:block text-sm font-semibold self-center max-lg:border-b max-lg:pb-2 tracking-tighter">
                    Developed w/ NextJs, React & Tailwind.
                </p>
                <div className="flex flex-col lg:flex-row">
                    <p className="text-sm self-center">
                        Copyrigth © {year} <span className="font-black tracking-widest">Mathen</span>;
                    </p>
                    <p className="text-sm self-center">
                        Todos os direitos reservados.
                    </p>
                </div>
                <p className="block lg:hidden text-sm font-semibold self-center max-lg:border-b max-lg:pb-2 tracking-tighter">
                    Developed w/ NextJs, React & Tailwind.
                </p>
            </div>
        </div>
    )
}

export default Footer

const Logo = () => {
    return (
        <div className="w-full text-center flex flex-col items-center max-lg:mb-1 max-lg:mt-1 self-center">
            <h1 className="font-nz font-black text-5xl bg-clip-text text-transparent bg-gradient-to-b from-slate-600 via-slate-500 to-black">
                Mathhen
            </h1>
            <h2 className="text-sm font-roboto tracking-tighter">
                <span className="text-gray-900">Fullstack</span> <span className="font-black text-emerald-600">Developer</span>
            </h2>
        </div>
    )
}