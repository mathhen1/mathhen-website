"use client"

import { ArrowLeftCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import { linkWpp } from "../Utils/links"
import { useEffect, useRef } from "react"

const Services = () => {
    const router = useRouter()
    const rootRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const obs = new IntersectionObserver(entries => entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("reveal")) {
                    entry.target.classList.add("animate-reveal")
                }
                if (entry.target.classList.contains("reveal-r")) {
                    entry.target.classList.add("animate-reveal-r")
                }
                if (entry.target.classList.contains("reveal-l")) {
                    entry.target.classList.add("animate-reveal-l")
                }
            }
        }))
        if (rootRef.current) {
            const root = rootRef.current.querySelectorAll(".reveal, .reveal-r, .reveal-l")
            root.forEach(e => obs.observe(e))
        }
    }, [])

    return (
        <div ref={rootRef} className="w-screen flex flex-col bg-black text-white lg:tracking-widest lg:font-sans">
            <NavBar />
            <div className="min-h-[90vh] relative flex flex-col gap-3">

                <div className="">
                    <ArrowLeftCircle onClick={() => router.back()} className="reveal opacity-0 absolute top-1 left-3 hover:cursor-pointer" />
                    <h1 className="reveal opacity-0 text-2xl font-black text-emerald-600 text-center w-full mb-4">
                        Serviços
                    </h1>
                </div>

                {/* Landing Page */}
                <div className="w-full flex flex-col gap-3 mt-2 mb-2">

                    <div className="reveal opacity-0 lg:w-10/12 flex flex-col lg:flex-row gap-3 lg:gap-0 lg:self-center">

                        <div className="reveal opacity-0 flex flex-col lg:justify-center gap-3 lg:w-1/2">
                            <img src="landingpage.png" alt="" className="reveal opacity-0 w-3/4 sm:w-1/3 lg:w-2/3 rounded-full" />

                            <p className="reveal opacity-0 ml-2 text-4xl font-semibold text-wrap w-4/5 tracking-tighter lg:font-roboto 
                    bg-gradient-to-r bg-clip-text text-transparent from-slate-300 via-slate-200 to-slate-400">
                                &ndash; Transforme seus visitantes em clientes com uma pagina focada em conversão
                            </p>

                        </div>

                        <span className="reveal opacity-0 lg:hidden h-px w-10/12 border-t self-center border-gray-400"></span>

                        <div className="reveal opacity-0 ml-2 flex flex-col lg:justify-center gap-2 lg:w-1/2">
                            <h2 className="reveal opacity-0 text-xl text-emerald-400 w-10/12">
                                &bull; O que é uma Landing Page?
                            </h2>

                            <p className="reveal opacity-0 text-xs lg:text-sm text-gray-200 p-2 bg-slate-800 w-11/12 rounded-sm">
                                É uma página web autônoma criada com um foco único: a conversão. A LP elimina distrações, menus e links de navegação para direcionar a atenção do visitante para uma ação específica, como comprar um produto, baixar um material ou preencher um formulário.
                            </p>

                            <h2 className="reveal opacity-0 text-xl text-yellow-400 tracking-wide w-10/12">
                                &bull; Para que serve uma LP?
                            </h2>

                            <p className="reveal opacity-0 text-xs lg:text-sm text-gray-200 p-2 bg-slate-800 w-11/12 rounded-sm">
                                Uma LP serve para converter visitantes em clientes, focando em uma única ação. Diferente de um site comum, ela é minimalista, sem menus ou distrações, e costuma ser o destino de campanhas de anúncios.
                            </p>

                            <h2 className="reveal opacity-0 text-xl text-red-500 tracking-wide w-10/12">
                                &bull; Quando devo usar uma LP?
                            </h2>

                            <p className="reveal opacity-0 text-xs lg:text-sm text-gray-200 p-2 bg-slate-800 w-11/12 rounded-sm">
                                Se torna necessario no momento em que você for precisar iniciar uma campanha de marketing; Ou então precisa que o usuário realize uma ação específica, como comprar um produto ou se cadastrar em um evento. A Landing Page foca 100% nessa ação, que converte o visitante em cliente.
                            </p>
                        </div>
                    </div>

                    <GetWebsite text={"Garantir minha Landing Page"} />
                </div>

                <span className="reveal opacity-0 hidden lg:block mt-5 mb-5 w-1/2 border-t border-gray-500 self-center"></span>

                {/* Portfolio */}

                <div className="w-full flex flex-col gap-3 mt-2 mb-2">

                    <div className="reveal opacity-0 flex flex-col lg:flex-row gap-3 lg:w-10/12 lg:self-center">
                        <div className="reveal opacity-0 flex flex-col lg:justify-center gap-3 lg:w-1/2">

                            <img src="portfolio.png" alt="" className="reveal opacity-0 w-3/4 sm:w-1/3 lg:w-2/3 rounded-full" />

                            <p className="reveal opacity-0 ml-2 text-4xl font-semibold text-wrap w-4/5 tracking-tighter 
                    bg-gradient-to-r bg-clip-text text-transparent from-slate-300 via-slate-200 to-slate-400">
                                &ndash; Construa sua vitrine profissional de forma digital e se destaque no mercado
                            </p>

                        </div>

                        <span className="reveal opacity-0 lg:hidden h-px w-10/12 border-t self-center border-gray-400"></span>

                        <div className="reveal opacity-0 ml-3 flex flex-col lg:justify-center gap-2 lg:w-1/2">
                            <h2 className="reveal opacity-0 text-xl text-emerald-400 tracking-wide w-10/12">
                                &bull; O que é um Portfolio?
                            </h2>

                            <p className="reveal opacity-0 text-xs lg:text-sm text-gray-200 p-2 bg-slate-800 w-11/12 rounded-sm">
                                É um compilado organizado dos seus melhores trabalhos, projetos e realizações. Diferente de um currículo, que apenas lista suas experiências, o portfólio prova na prática do que você é capaz. Ele funciona como uma vitrine para demonstrar suas habilidades, seu estilo e a qualidade técnica das suas entregas.
                            </p>

                            <h2 className="reveal opacity-0 text-xl text-yellow-400 tracking-wide w-10/12">
                                &bull; Para que serve um Portfolio?
                            </h2>

                            <p className="reveal opacity-0 text-xs lg:text-sm text-gray-200 p-2 bg-slate-800 w-11/12 rounded-sm">
                                Serve para comprovar suas habilidades e capacidades na prática. A pagina documenta todo seu aprendizado e evolução, expõe seu trabalho e resultados reais que você alcançou com seus projetos, além de ser um diferencial entre os profissionais. Também funciona como um catálogo de serviços para quem trabalha como freelancer ou tem um negócio próprio.
                            </p>

                            <h2 className="reveal opacity-0 text-xl text-red-500 tracking-wide w-10/12">
                                &bull; Quem deve ter um portfolio?
                            </h2>

                            <p className="reveal opacity-0 text-xs lg:text-sm text-gray-200 p-2 bg-slate-800 w-11/12 rounded-sm">
                                Qualquer profissional ou estudante que precise demonstrar seu trabalho pratico e resultados reais, como designers, programadores, redatores, fotógrafos, entre diversos outros. Ainda mais se é um profissional que atua no meio digital, ou lida com criação de conteudo.
                            </p>
                        </div>
                    </div>

                    <GetWebsite text={"Garantir meu Portfolio"} />
                </div>

                <span className="reveal opacity-0 hidden lg:block mt-5 mb-5 w-1/2 border-t border-gray-500 self-center"></span>

                {/* Institucional */}

                <div className="w-full flex flex-col gap-3 mt-2 mb-2">

                    <div className="reveal opacity-0 flex flex-col lg:flex-row gap-3 lg:w-10/12 lg:self-center">
                        <div className="reveal opacity-0 flex flex-col lg:justify-center gap-3 lg:w-1/2">

                            <img src="institucional.png" alt="" className="reveal opacity-0 w-3/4 sm:w-1/3 lg:w-2/3 rounded-full" />

                            <p className="reveal opacity-0 ml-2 text-4xl font-semibold text-wrap w-4/5 tracking-tighter 
                    bg-gradient-to-r bg-clip-text text-transparent from-slate-300 via-slate-200 to-slate-400">
                                &ndash; Crie uma identidade online pro seu negocio e transmita credibilidade com seu serviço
                            </p>

                        </div>

                        <span className="reveal opacity-0 lg:hidden h-px w-10/12 border-t self-center border-gray-400"></span>

                        <div className="reveal opacity-0 ml-3 flex flex-col lg:justify-center gap-2 lg:w-1/2">
                            <h2 className="reveal opacity-0 text-xl text-emerald-400 tracking-wide w-10/12">
                                &bull; O que é um site Institucional?
                            </h2>

                            <p className="reveal opacity-0 text-xs lg:text-sm text-gray-200 p-2 bg-slate-800 w-11/12 rounded-sm">
                                É basicamente um "cartão de visitas" digital, localizado por um endereço oficial que reflete a organização, que ajuda a apresentar a marca, sua história, missão, produtos e serviços, além de fornecer canais de contato. É a base da presença online de um negócio.
                            </p>

                            <h2 className="reveal opacity-0 text-xl text-yellow-400 tracking-wide w-10/12">
                                &bull; Para que serve um site Institucional?
                            </h2>

                            <p className="reveal opacity-0 text-xs lg:text-sm text-gray-200 p-2 bg-slate-800 w-11/12 rounded-sm">
                                Serve para apresentar a identidade de uma empresa, transmitir credibilidade e centralizar informações oficiais na internet. Ele apresenta o negocio, pode exibir ofertas, facilita o contato e ainda transmite seriedade e profissionalismo.
                            </p>

                            <h2 className="reveal opacity-0 text-xl text-red-500 tracking-wide w-10/12">
                                &bull; Quem deve ter um site Institucional?
                            </h2>

                            <p className="reveal opacity-0 text-xs lg:text-sm text-gray-200 p-2 bg-slate-800 w-11/12 rounded-sm">
                                Qualquer organização que deseja passar confiança, ter um canal próprio na internet. Pequenas e grandes empresasas, marcas locais, profissionais autônomos, negocios b2b, entre diversos outros.
                            </p>

                        </div>

                    </div>

                    <GetWebsite text={"Garantir meu site Institucional"} />
                </div>

                <span className="reveal opacity-0 hidden lg:block mt-5 mb-5 w-1/2 border-t border-gray-500 self-center"></span>

                {/* Personalizado */}

                <div className="w-full flex flex-col gap-3 mt-2 mb-2">
                    <div className="reveal opacity-0 flex flex-col lg:flex-row gap-3 lg:w-10/12 lg:self-center">
                        <div className="reveal opacity-0 flex flex-col lg:justify-center gap-3 lg:w-1/2">
                            <h1 className="reveal opacity-0 ml-3 text-5xl font-black font-nz lg:italic bg-gradient-to-t bg-clip-text from-slate-300 via-slate-400 to-slate-600 text-transparent p-2">
                                Personalizado
                            </h1>

                            <p className="reveal opacity-0 ml-2 text-4xl font-semibold text-wrap w-4/5 tracking-tighter 
                    bg-gradient-to-r bg-clip-text text-transparent from-slate-300 via-slate-200 to-slate-400">
                                &ndash; Sistema desenvolvido de forma exclusiva e detalhada para refletir os seus objetivos
                            </p>
                        </div>

                        <span className="reveal opacity-0 lg:hidden h-px w-10/12 border-t self-center border-gray-400"></span>

                        <div className="reveal opacity-0 ml-3 flex flex-col gap-2 lg:w-1/2">
                            <h2 className="reveal opacity-0 text-xl text-emerald-400 tracking-wide w-10/12">
                                &bull; O que é um sistema Personalizado?
                            </h2>

                            <p className="reveal opacity-0 lg:text-sm text-xs text-gray-200 p-2 bg-slate-800 w-11/12 rounded-sm">
                                É um programa de computador criado do zero para atender às regras, aos fluxos de trabalho e às necessidades únicas de uma empresa ou pessoa, pode ser um site, um mobile app, ou até mesmo outros tipos de sistemas. Ele é desenvolvido unicamente para resolver problemas específicos do seu negócio.
                            </p>

                            <h2 className="reveal opacity-0 text-xl text-yellow-400 tracking-wide w-10/12">
                                &bull; Para que serve um sistema Personalizado?
                            </h2>

                            <p className="reveal opacity-0 lg:text-sm text-xs text-gray-200 p-2 bg-slate-800 w-11/12 rounded-sm">
                                Serve para atender necessidades específicas de uma empresa, automatizar fluxos de trabalho únicos e resolver problemas que softwares prontos não conseguem cobrir. Ele elimina limitações operacionais, integra dados em um só lugar e acompanha o crescimento do negócio.
                            </p>

                            <h2 className="reveal opacity-0 text-xl text-red-500 tracking-wide w-10/12">
                                &bull; Qual tipo de sistema eu preciso pro meu caso?
                            </h2>

                            <p className="reveal opacity-0 text-xs lg:text-sm text-gray-200 p-2 bg-slate-800 w-11/12 rounded-sm">
                                Você deve avaliar o objetivo principal, a forma de acesso e a complexidade da tarefa do seu projeto. Identifique o principal problema que deve ser resolvido, liste os processos e tarefas diárias que geram perda de tempo e defina um orçamento disponível.
                            </p>

                        </div>
                    </div>

                    <GetWebsite text={"Preciso de um sistema Personalizado"} />
                </div>

                <span className="reveal opacity-0 hidden lg:block w-1/2 border-t border-gray-500 self-center"></span>
            </div>
            <Footer />
        </div>
    )
}

export default Services

const GetWebsite = (props: any) => {
    return (
        <a href={linkWpp} className="reveal opacity-0 mt-2 mb-5 w-10/12 sm:w-2/3 lg:w-1/3 -ml-4 self-center text-center font-roboto 
            font-extrabold p-3 outline text-sm outline-2 text-red-500 bg-black text-nowrap">
            <span className="animate-pulse">
                {props.text}
            </span>
        </a>
    )
}