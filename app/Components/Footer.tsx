import { useRouter } from "next/navigation"
import { scrollTo } from "../Utils/funcs"

const Footer = () => {
    const year = new Date().getFullYear()
    const router = useRouter()

    return (
        <div className="bg-white text-black font-mono flex flex-col p-2">
            <div className="flex flex-col gap-2 p-2 tracking-tight">

                <Logo />

                <h1 className="border-l-2 pl-2 font-semibold">
                    Links de Navegação
                </h1>

                <ul className="flex flex-col w-max text-sm pl-2 gap-2">
                    <span className="border-b" onClick={() => {
                        const a = scrollTo("homepage")
                        if (a === false) {
                            router.push("/")
                        }
                    }}>
                        Homepage
                    </span>
                    <span className="border-b" onClick={() => router.push("/Projects")}>
                        Projetos
                    </span>
                    <span className="border-b">
                        Serviços
                    </span>
                </ul>
            </div>

            <span className="h-px w-11/12 border-t border-gray-400 self-center mb-2 mt-2"></span>

            <div className="tracking-tighter flex flex-col gap-2 p-2">

                <h1 className="border-l-2 pl-2 font-semibold">
                    Links para Contato
                </h1>

                <ul className="flex flex-col w-max text-sm pl-2 gap-2">
                    <span className="border-b">
                        Instagram
                    </span>
                    <span className="border-b">
                        WhatsApp
                    </span>
                    <span className="border-b">
                        Linkedin
                    </span>
                </ul>
            </div>

            <span className="h-px w-3/4 self-center border-t mt-2 mb-2 border-black"></span>

            <p className="text-sm self-center">
                Copyrigth © {year} <span className="font-black tracking-widest">Mathen</span>;
            </p>
            <p className="text-sm self-center">
                Todos os direitos reservados.
            </p>
            <p className="text-sm font-semibold self-center border-b pb-2 tracking-tighter">
                Developed w/ NextJs, React & Tailwind.
            </p>
        </div>
    )
}

export default Footer

const Logo = () => {
    return (
        <div className="w-full text-center flex flex-col items-center mb-1 mt-1 self-center">
            <h1 className="font-nz font-black text-5xl bg-clip-text text-transparent bg-gradient-to-b from-slate-600 via-slate-500 to-black">
                Mathhen
            </h1>
            <h2 className="text-sm font-roboto tracking-tighter">
                <span className="text-gray-900">Fullstack</span> <span className="font-black text-emerald-600">Developer</span>
            </h2>
        </div>
    )
}