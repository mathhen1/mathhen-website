import { ArrowUpRight } from "lucide-react"
import { linkWpp } from "../Utils/links"

const Services = () => {
    return (
        <div className="h-full flex flex-col gap-5 bg-black text-white">

            <h1 className="reveal opacity-0 text-2xl lg:tracking-widest font-bold border-b-2 self-center mt-6 mb-3">
                Serviços
            </h1>

            <div className="flex flex-col lg:flex-row gap-5 lg:h-full lg:items-stretch lg:gap-3 lg:w-10/12 lg:self-center">

                {/* Landing Pages */}

                <div className="reveal opacity-0 w-11/12 sm:w-3/4 max-lg:self-center bg-slate-900 rounded-md flex flex-col gap-5 items-center p-2">
                    <h1 className="reveal opacity-0 text-center pt-2 text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400">
                        Landing Page
                    </h1>

                    <h3 className="reveal opacity-0 text-base w-10/12 text-center font-semibold">
                        Direcione seus clientes até a venda do seu produto
                    </h3>

                    <p className="reveal opacity-0 text-sm text-start self-start font-light tracking-tighter font-mono w-10/12 pl-2">
                        Site objetivo e atraente. O foco está na conversão, que direciona o usuario até uma ação, convertendo-o em um consumidor.
                    </p>

                    <ul className="reveal opacity-0 pl-1 text-xs font-semibold font-roboto self-start gap-1">
                        <li>
                            &bull; Call To Action
                        </li>
                        <li>
                            &bull; Design limpo
                        </li>
                        <li>
                            &bull; Foco na conversão
                        </li>
                    </ul>

                    <SeeMore />
                </div>

                {/* portfolios */}

                <div className="reveal opacity-0 w-11/12 sm:w-3/4 max-lg:self-center bg-slate-900 rounded-md flex flex-col gap-5 items-center p-2">
                    <h1 className="reveal opacity-0 text-center pt-2 text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400">
                        Portfolio
                    </h1>

                    <h3 className="reveal opacity-0 text-base w-10/12 text-center font-semibold">
                        Construa sua vitrine profissional de forma digital
                    </h3>

                    <p className="reveal opacity-0 text-sm text-start self-start font-light tracking-tighter font-mono w-10/12 pl-2">
                        Demonstre suas capacidades, experiência e conhecimentos de forma chamativa por meio de um curriculo digital.
                    </p>

                    <ul className="pl-1 text-xs font-semibold font-roboto self-start gap-1">
                        <li>
                            &bull; Visibilidade no Google
                        </li>
                        <li>
                            &bull; Centraliza informações
                        </li>
                        <li>
                            &bull; Estabilidade
                        </li>
                    </ul>

                    <SeeMore />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-5 lg:gap-3 lg:h-full lg:items-stretch lg:gap-3 lg:w-10/12 lg:self-center">

                {/* site institucional */}

                <div className="reveal opacity-0 w-11/12 sm:w-3/4 max-lg:self-center bg-slate-900 rounded-md flex flex-col gap-5 items-center p-2">
                    <h1 className="reveal opacity-0 text-center pt-2 text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400">
                        Site Institucional
                    </h1>

                    <h3 className="reveal opacity-0 text-base w-10/12 text-center font-semibold">
                        Consolide o valor do seu negócio criando uma forte presença digital
                    </h3>

                    <p className="reveal opacity-0 text-sm text-start self-start font-light tracking-tighter font-mono w-10/12 pl-2">
                        Transmita credibilidade para o seu negocio com uma identidade online, apresentando seus valores e serviços.
                    </p>

                    <ul className="pl-1 text-xs font-semibold font-roboto self-start gap-1">
                        <li>
                            &bull; Centraliza Informações
                        </li>
                        <li>
                            &bull; Autonomia e Controle
                        </li>
                        <li>
                            &bull; Visibilidade no Google
                        </li>
                    </ul>

                    <SeeMore />
                </div>

                {/* site personalizado */}

                <div className="reveal opacity-0 w-11/12 sm:w-3/4 max-lg:self-center bg-slate-900 rounded-md flex flex-col gap-5 items-center p-2">
                    <h1 className="reveal opacity-0 text-center pt-2 text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400">
                        Site Personalizado
                    </h1>

                    <h3 className="reveal opacity-0 text-base w-10/12 text-center font-semibold">
                        Garanta que a sua marca tenha um serviço digital único
                    </h3>

                    <p className="reveal opacity-0 text-sm text-start self-start font-light tracking-tighter font-mono w-10/12 pl-2">
                        Sistema desenvolvido de forma exclusiva para refletir os objetivos de um produto ou marca.
                    </p>

                    <ul className="pl-1 text-xs font-semibold font-roboto self-start gap-1">
                        <li>
                            &bull; Funcionalidades Específicas
                        </li>
                        <li>
                            &bull; Design único
                        </li>
                        <li>
                            &bull; Perfomance e Escalabidade
                        </li>
                    </ul>

                    <SeeMore />
                </div>

            </div>

            <span className="reveal opacity-0 h-px w-10/12 lg:w-1/3 border-t-2 border-gray-400 self-center mt-3 mb-5"></span>
        </div>
    )
}

const SeeMore = () => {
    return (
        <div className="flex flex-row w-full">
            <a href="" className="group reveal opacity-0 w-full flex flex-row lg:items-start lg:flex-col items-center gap-1 pl-2 text-sm text-emerald-500 text-start w-1/2">
                <span className="flex flex-row gap-1">Veja mais <ArrowUpRight className="w-5" /></span>
                <span className="h-0.5 w-0 bg-emerald-500 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:w-1/4"></span>
            </a>
            <a className="reveal opacity-0 pr-2 text-sm text-black bg-emerald-500 text-center border rounded-4xl p-1 w-full sm:w-1/2 transition duration-200 hover:transition hover:duration-200
            hover:bg-emerald-800" href={linkWpp}>
                <span className="animate-pulse font-black">
                    Quero meu site
                </span>
            </a>
        </div>
    )
}

export default Services