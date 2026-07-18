import { ArrowUpRight } from "lucide-react"

const Services = () => {
    return (
        <div className="h-full flex flex-col gap-5 bg-black text-white">

            <h1 className="reveal opacity-0 text-2xl font-bold border-b-2 self-center mt-6 mb-3">
                Serviços
            </h1>

            {/* Landing Pages */}

            <div className="reveal opacity-0 w-11/12 self-center bg-slate-900 rounded-md flex flex-col gap-5 items-center p-2">
                <h1 className="reveal opacity-0 text-center pt-2 text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400">
                    Landing Page
                </h1>

                <h3 className="reveal opacity-0 text-base w-10/12 text-center font-semibold">
                    Direcione seus clientes até a venda do seu produto
                </h3>

                <p className="reveal opacity-0 text-sm text-start self-start font-light tracking-tighter font-mono w-10/12 pl-2">
                    Site objetivo e atraente. O foco está na conversão, que direciona o usuario até uma ação, convertendo-o em um consumidor.
                </p>

                <ul className="pl-1 text-xs font-semibold font-roboto self-start gap-1">
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

            <div className="reveal opacity-0 w-11/12 self-center bg-slate-900 rounded-md flex flex-col gap-5 items-center p-2">
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

            {/* site institucional */}

            <div className="reveal opacity-0 w-11/12 self-center bg-slate-900 rounded-md flex flex-col gap-5 items-center p-2">
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

            <div className="reveal opacity-0 w-11/12 self-center bg-slate-900 rounded-md flex flex-col gap-5 items-center p-2 mb-2">
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

            <span className="reveal opacity-0 h-px w-10/12 border-t-2 border-gray-400 mb-3 self-center"></span>
        </div>
    )
}

const SeeMore = () => {
    return (
        <div className="flex flex-row w-full">
            <a href="" className="reveal opacity-0 w-full flex flex-row items-center gap-1 pl-2 text-sm text-emerald-500 text-start w-1/2">
                Veja mais <ArrowUpRight className="w-5" />
            </a>
            <span className="reveal opacity-0 pr-2 text-sm text-black bg-emerald-500 text-center border rounded-4xl p-1 w-full">
                <span className="animate-pulse font-black">Quero meu site</span>
            </span>
        </div>
    )
}

export default Services