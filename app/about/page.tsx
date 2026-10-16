"use client"

import { ArrowLeftCircle, MessageSquare } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import DownloadResume from "../Components/DownloadResume"
import { ListTech } from "../Components/MoreAboutMe"
import { linkGithub, linkLinkedin, linkWpp } from "../Utils/links"
import { aboutSkillsTec } from "../Utils/skillsTec"

const journey = [
    {
        period: "13–14 anos",
        title: "Primeiros passos com lógica",
        description: "Meu primeiro contato com programação foi no Code.org, aprendendo lógica com blocos e pequenos desafios.",
    },
    {
        period: "17 anos",
        title: "Primeiro contato com código",
        description: "Na faculdade, comecei a programar de verdade. O curso de ADS me deu uma base sólida, começando por Java.",
    },
    {
        period: "Depois da graduação",
        title: "Uma pausa, sem perder o vínculo",
        description: "Me afastei da busca por uma vaga na área, mas continuei próximo da programação e explorando projetos por conta própria.",
    },
    {
        period: "Fim de 2025 até hoje",
        title: "Retomada com foco total em programação",
        description: "Voltei aos estudos com dedicação intensa e venho praticando tecnologias atuais para construir minha carreira em desenvolvimento de software.",
    },
];

const AboutMePage = () => {
    const router = useRouter()
    const rootRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return

                if (entry.target.classList.contains("reveal")) {
                    entry.target.classList.add("animate-reveal")
                }
                if (entry.target.classList.contains("reveal-r")) {
                    entry.target.classList.add("animate-reveal-r")
                }
                if (entry.target.classList.contains("reveal-l")) {
                    entry.target.classList.add("animate-reveal-l")
                }
                observer.unobserve(entry.target)
            })
        })

        const revealElements = rootRef.current?.querySelectorAll(".reveal, .reveal-r, .reveal-l")
        revealElements?.forEach(element => observer.observe(element))

        return () => observer.disconnect()
    }, [])

    return (
        <div ref={rootRef} className="w-full bg-black text-white lg:font-roboto">
            <NavBar />

            <main>
                <section className="bg-gradient-to-br from-[#0a0a0a] via-black to-[#0b1712] px-5 py-12 sm:px-8 lg:py-16">
                    <div className="mx-auto flex w-full max-w-7xl flex-col gap-9 lg:gap-12">
                        <header className="reveal opacity-0 relative flex items-center justify-center">
                            <button
                                type="button"
                                aria-label="Voltar à página anterior"
                                onClick={() => router.back()}
                                className="absolute left-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-300 transition duration-300 hover:-translate-x-1 hover:border-emerald-400/60 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                            >
                                <ArrowLeftCircle aria-hidden="true" className="h-6 w-6" />
                            </button>
                            <div className="max-w-3xl px-12 text-center">
                                <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-400 sm:text-sm">
                                    Perfil profissional
                                </p>
                                <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                                    Apresentação e trajetória
                                </h1>
                                <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg">
                                    Um pouco sobre minha formação, meu caminho na programação e o foco que tenho hoje em desenvolvimento de software.
                                </p>
                            </div>
                        </header>

                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                            <section className="reveal opacity-0 flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 sm:p-8">
                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                                    Quem sou
                                </p>
                                <h2 className="mb-5 text-2xl font-bold leading-tight sm:text-3xl">
                                    Construindo uma base sólida em programação
                                </h2>
                                <div className="flex flex-col gap-4 text-sm leading-relaxed text-gray-300 sm:text-base">
                                    <p>
                                        Meu nome é Matheus Henrique, sou desenvolvedor Full Stack. Moro em Olinda, Pernambuco. Meu foco é na area de Desenvolvimento Web, mas posso atuar na construção de sistemas variados, como Desktop e Mobile.
                                    </p>
                                    <p>
                                        Estou sempre aprimorando meus conhecimentos, buscando me atualizar das tecnologias atuais do mercado. Além de ser um verdadeiro entusiasta da área, eu aprendo e pratico muita coisa sozinho, buscando evolução com pratica real, mesmo que de forma independente.
                                    </p>
                                </div>
                                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                                        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-emerald-400">Formação</p>
                                        <p className="text-sm font-semibold text-white">Análise e Desenvolvimento de Sistemas</p>
                                        <p className="mt-1 text-xs text-gray-400">AESO Barros Melo · 2022</p>
                                    </div>
                                    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                                        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-emerald-400">Especialização</p>
                                        <p className="text-sm font-semibold text-white">Engenharia de Software</p>
                                        <p className="mt-1 text-xs text-gray-400">Universidade Frassinetti do Recife · 2026</p>
                                    </div>
                                </div>
                            </section>

                            <section className="reveal opacity-0 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 sm:p-8">
                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                                    Jornada na área
                                </p>
                                <h2 className="mb-6 text-2xl font-bold leading-tight sm:text-3xl">
                                    Da curiosidade à prática profissional
                                </h2>
                                <ol className="grid gap-3 sm:grid-cols-2">
                                    {journey.map((step, index) => (
                                        <li key={step.period} className="flex flex-col rounded-2xl border border-white/10 bg-black/30 p-4 transition duration-300 hover:border-emerald-400/40 hover:bg-black/50">
                                            <span className="mb-3 inline-flex w-fit items-center rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                                                0{index + 1} · {step.period}
                                            </span>
                                            <h3 className="mb-2 font-bold text-white sm:text-lg">{step.title}</h3>
                                            <p className="text-sm leading-relaxed text-gray-400">{step.description}</p>
                                        </li>
                                    ))}
                                </ol>
                            </section>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 px-5 py-12 text-black sm:px-8 lg:py-16">
                    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
                        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                            <div className="flex flex-col gap-3">
                                <h2 className="reveal opacity-0 border-l-4 border-emerald-500 pl-4 text-2xl font-black tracking-tight sm:text-3xl">
                                    Tecnologias
                                </h2>
                                <ListTech />
                            </div>

                            <section className="reveal opacity-0 flex flex-col rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-lg shadow-black/5 sm:p-8">
                                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                                    Base técnica
                                </p>
                                <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                                    Conhecimentos técnicos
                                </h2>
                                <p className="mt-3 max-w-xl leading-relaxed text-gray-600">
                                    Conceitos e práticas que aplico para desenvolver sistemas seguros, integrados e fáceis de manter.
                                </p>

                                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                                    {aboutSkillsTec.map((skill, index) => (
                                        <li key={skill.id} className="reveal-r opacity-0 flex min-h-16 items-start gap-3 rounded-xl border border-gray-200 bg-white p-3 text-sm font-medium leading-relaxed text-gray-800 transition duration-300 hover:border-emerald-500/60 hover:shadow-md hover:shadow-emerald-950/5">
                                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 border-t border-gray-200 pt-6">
                                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            <h3 className="font-bold text-gray-950">Vamos conversar sobre software?</h3>
                                            <p className="mt-1 text-sm text-gray-600">Estou aberto a novas oportunidades e projetos.</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <a
                                                aria-label="LinkedIn"
                                                href={linkLinkedin}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-800 transition duration-300 hover:-translate-y-1 hover:border-emerald-600 hover:bg-emerald-500 hover:text-black hover:shadow-lg hover:shadow-emerald-900/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                                            >
                                                <FaLinkedin aria-hidden="true" className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                                            </a>
                                            <a
                                                aria-label="GitHub"
                                                href={linkGithub}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-800 transition duration-300 hover:-translate-y-1 hover:border-emerald-600 hover:bg-emerald-500 hover:text-black hover:shadow-lg hover:shadow-emerald-900/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                                            >
                                                <FaGithub aria-hidden="true" className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                        <a
                                            href={`${linkWpp}?text=${encodeURIComponent("Olá, gostaria de conversar sobre uma oportunidade ou projeto de software.")}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-center font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:text-black hover:shadow-lg hover:shadow-emerald-900/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                                        >
                                            Vamos conversar <MessageSquare aria-hidden="true" className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </a>
                                        <DownloadResume className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-emerald-700 bg-emerald-500 px-4 py-3 text-center font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-900/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:transition-transform [&>svg]:duration-300 [&:hover>svg]:translate-y-0.5" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default AboutMePage
