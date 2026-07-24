"use client"

import { ArrowLeftCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"

const Services = () => {
    const router = useRouter()
    return (
        <div className="w-screen flex flex-col text-white lg:font-roboto lg:tracking-widest">
            <NavBar />
            <div className="min-h-[90vh] relative flex flex-col gap-3">

                <div className="">
                    <ArrowLeftCircle onClick={() => router.back()} className="absolute top-1 left-3 hover:cursor-pointer" />
                    <h1 className="text-2xl font-black text-emerald-600 text-center w-full mb-4">
                        Serviços
                    </h1>
                </div>

                {/* Landing Page */}
                <div className="w-full flex flex-col gap-6 bg-white text-black">

                    <h1 className="mt-5 ml-3 text-5xl font-black font-nz lg:italic">
                        Landing Page
                    </h1>

                    <p className="ml-2 text-4xl font-semibold text-wrap w-4/5 tracking-tighter 
                    bg-gradient-to-r bg-clip-text text-transparent from-black via-slate-700 to-slate-500">
                        &ndash; Transforme seus visitantes em <span className="text-emerald-500 font-extrabold">clientes</span> com uma pagina focada em <span className="font-extrabold text-gray-500 underline underline-offset-4">conversão</span>
                    </p>

                    <span className="h-px w-10/12 border-t self-center border-gray-400"></span>

                    <div className="ml-2 flex flex-col gap-2">
                        <h2 className="text-xl">
                            &bull;O que é uma Landing Page &#40;LP&#41;?
                        </h2>

                        <p className="text-xs text-gray-700 p-2 bg-slate-200 w-11/12 rounded-sm">
                            É uma página web autônoma criada com um foco único: a conversão. A LP elimina distrações, menus e links de navegação para direcionar a atenção do visitante para uma ação específica, como comprar um produto, baixar um material ou preencher um formulário.
                        </p>

                        <span className="-ml-2 h-px w-full border-t self-start border-gray-400"></span>

                        <h2 className="text-xl">
                            &bull;Para que serve uma LP?
                        </h2>

                        <p className="text-xs text-gray-700 p-2 bg-slate-200 w-11/12 rounded-sm">
                            Uma LP serve para converter visitantes em clientes, focando em uma única ação. Diferente de um site comum, ela é minimalista, sem menus ou distrações, e costuma ser o destino de campanhas de anúncios.
                        </p>

                        <span className="-ml-2 h-px w-full border-t self-start border-gray-400"></span>

                        <h2 className="text-xl">
                            &bull;Quando devo usar uma LP?
                        </h2>

                        <p className="text-xs text-gray-700 p-2 bg-slate-200 w-11/12 rounded-sm">
                            Se torna necessario no momento em que você for precisar iniciar uma campanha de marketing; Ou então precisa que o usuário realize uma ação específica, como comprar um produto ou se cadastrar em um evento. A Landing Page foca 100% nessa ação, que converte o visitante em cliente.
                        </p>

                        <span className="-ml-2 h-px w-full border-t self-start border-gray-400"></span>

                    </div>
                </div>

                {/* Portfolio */}

                <div className="w-full flex flex-col gap-6 bg-white text-black">

                    <h1 className="mt-5 ml-3 text-5xl font-black font-nz lg:italic">
                        Portfolio
                    </h1>

                    <p className="ml-2 text-4xl font-semibold text-wrap w-4/5 tracking-tighter 
                    bg-gradient-to-r bg-clip-text text-transparent from-black via-slate-700 to-slate-500">
                        &ndash; Construa sua vitrine profissional de forma digital e se destaque no mercado
                    </p>

                    <span className="h-px w-10/12 border-t self-center border-gray-400"></span>

                    <div className="ml-3 flex flex-col gap-2">
                        <h2 className="text-xl">
                            &bull;O que é um Portfolio?
                        </h2>

                        <p className="text-xs text-gray-700 p-2 bg-slate-200 w-11/12 rounded-sm">
                            É um compilado organizado dos seus melhores trabalhos, projetos e realizações. Diferente de um currículo, que apenas lista suas experiências, o portfólio prova na prática do que você é capaz. Ele funciona como uma vitrine para demonstrar suas habilidades, seu estilo e a qualidade técnica das suas entregas.
                        </p>

                        <span className="-ml-2 h-px w-full border-t self-start border-gray-400"></span>

                        <h2 className="text-xl">
                            &bull;Para que serve um Portfolio?
                        </h2>

                        <p className="text-xs text-gray-700 p-2 bg-slate-200 w-11/12 rounded-sm">
                            Serve para comprovar suas habilidades e capacidades na prática. A pagina documenta todo seu aprendizado e evolução, expõe seu trabalho e resultados reais que você alcançou com seus projetos, além de ser um diferencial entre os profissionais. Também funciona como um catálogo de serviços para quem trabalha como freelancer ou tem um negócio próprio.
                        </p>

                        <span className="-ml-2 h-px w-full border-t self-start border-gray-400"></span>

                        <h2 className="text-xl">
                            &bull;Quem deve ter um portfolio?
                        </h2>

                        <p className="text-xs text-gray-700 p-2 bg-slate-200 w-11/12 rounded-sm">
                            Qualquer profissional ou estudante que precise demonstrar seu trabalho pratico e resultados reais, como designers, programadores, redatores, fotógrafos, entre diversos outros. Ainda mais se é um profissional que atua no meio digital, ou lida com criação de conteudo.
                        </p>

                        <span className="-ml-2 h-px w-full border-t self-start border-gray-400"></span>

                    </div>
                </div>

                {/* Institucional */}

                <div className="w-full flex flex-col gap-6 bg-white text-black">

                    <h1 className="mt-5 ml-3 text-5xl font-black font-nz lg:italic">
                        Institucional
                    </h1>

                    <p className="ml-2 text-4xl font-semibold text-wrap w-4/5 tracking-tighter 
                    bg-gradient-to-r bg-clip-text text-transparent from-black via-slate-700 to-slate-500">
                        &ndash; Crie uma identidade online pro seu negocio e transmita credibilidade com seu serviço
                    </p>

                    <span className="h-px w-10/12 border-t self-center border-gray-400"></span>

                    <div className="ml-3 flex flex-col gap-2">
                        <h2 className="text-xl">
                            &bull;O que é um site Institucional?
                        </h2>

                        <p className="text-xs text-gray-700 p-2 bg-slate-200 w-11/12 rounded-sm">
                            É basicamente um "cartão de visitas" digital, localizado por um endereço oficial que reflete a organização, que ajuda a apresentar a marca, sua história, missão, produtos e serviços, além de fornecer canais de contato. É a base da presença online de um negócio.
                        </p>

                        <span className="-ml-2 h-px w-full border-t self-start border-gray-400"></span>

                        <h2 className="text-xl">
                            &bull;Para que serve um site Institucional?
                        </h2>

                        <p className="text-xs text-gray-700 p-2 bg-slate-200 w-11/12 rounded-sm">
                            Serve para apresentar a identidade de uma empresa, transmitir credibilidade e centralizar informações oficiais na internet. Ele apresenta o negocio, pode exibir ofertas, facilita o contato e ainda transmite seriedade e profissionalismo.
                        </p>

                        <span className="-ml-2 h-px w-full border-t self-start border-gray-400"></span>

                        <h2 className="text-xl">
                            &bull;Quem deve ter um site Institucional?
                        </h2>

                        <p className="text-xs text-gray-700 p-2 bg-slate-200 w-11/12 rounded-sm">
                           Qualquer organização que deseja passar confiança, ter um canal próprio na internet. Pequenas e grandes empresasas, marcas locais, profissionais autônomos, negocios b2b, entre diversos outros.
                        </p>

                        <span className="-ml-2 h-px w-full border-t self-start border-gray-400"></span>

                    </div>
                </div>

                {/* Personalizado */}

                <div className="w-full flex flex-col gap-6 bg-white text-black">

                    <h1 className="mt-5 ml-3 text-5xl font-black font-nz lg:italic">
                        Personalizado
                    </h1>

                    <p className="ml-2 text-4xl font-semibold text-wrap w-4/5 tracking-tighter 
                    bg-gradient-to-r bg-clip-text text-transparent from-black via-slate-700 to-slate-500">
                        &ndash; Sistema desenvolvido de forma exclusiva e detalhada para refletir os seus objetivos
                    </p>

                    <span className="h-px w-10/12 border-t self-center border-gray-400"></span>

                    <div className="ml-3 flex flex-col gap-2">
                        <h2 className="text-xl">
                            &bull;O que é um sistema personalizado?
                        </h2>

                        <p className="text-xs text-gray-700 p-2 bg-slate-200 w-11/12 rounded-sm">
                            É um programa de computador criado do zero para atender às regras, aos fluxos de trabalho e às necessidades únicas de uma empresa ou pessoa, pode ser um site, um mobile app, ou até mesmo outros tipos de sistemas. Ele é desenvolvido unicamente para resolver problemas específicos do seu negócio.
                        </p>

                        <span className="-ml-2 h-px w-full border-t self-start border-gray-400"></span>

                        <h2 className="text-xl">
                            &bull;Para que serve um Portfolio?
                        </h2>

                        <p className="text-xs text-gray-700 p-2 bg-slate-200 w-11/12 rounded-sm">
                            Serve para atender necessidades específicas de uma empresa, automatizar fluxos de trabalho únicos e resolver problemas que softwares prontos não conseguem cobrir. Ele elimina limitações operacionais, integra dados em um só lugar e acompanha o crescimento do negócio.
                        </p>

                        <span className="-ml-2 h-px w-full border-t self-start border-gray-400"></span>

                        <h2 className="text-xl">
                            &bull;Qual tipo de sistema eu preciso pro meu caso?
                        </h2>

                        <p className="text-xs text-gray-700 p-2 bg-slate-200 w-11/12 rounded-sm">
                            Você deve avaliar o objetivo principal, a forma de acesso e a complexidade da tarefa do seu projeto. Identifique o principal problema que deve ser resolvido, liste os processos e tarefas diárias que geram perda de tempo e defina um orçamento disponível.
                        </p>

                        <span className="-ml-2 h-px w-full border-t self-start border-gray-400"></span>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services