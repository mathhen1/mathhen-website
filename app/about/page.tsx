"use client"

import { ArrowDownToLine, ArrowLeftCircle, MessageSquare } from "lucide-react"
import { useRouter } from "next/navigation"
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import { linkGithub, linkIconGithubBlack, linkIconLinkedinBlack, linkLinkedin, linkWpp } from "../Utils/links"
import { useEffect, useRef } from "react"
import { ListTech } from "../Components/MoreAboutMe"
import { aboutSkillsTec } from "../Utils/skillsTec"

const AboutMePage = () => {
    const router = useRouter()
    const rootRef = useRef<HTMLDivElement>(null)
    const title = "reveal opacity-0 font-extrabold text-lg pl-3 tracking-wider text-emerald-500"
    const p = "reveal opacity-0 pl-6 text-xs"

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
        <div ref={rootRef} className="w-screen flex flex-col bg-black text-white lg:font-roboto">
            <NavBar />
            <div className="min-h-[100vh] relative flex flex-col gap-5 font-roboto lg:tracking-wide">

                <div className="w-full flex flex-row items-center sm:justify-center">
                    <span className="animate-reveal-r w-1/3 pl-3 sm:w-max sm:absolute sm:left-3 hover:cursor-pointer">
                        <ArrowLeftCircle onClick={() => router.back()} />
                    </span>
                    <h1 className="animate-reveal-l text-start pb-1 text-3xl font-black text-emerald-500">
                        Sobre mim
                    </h1>
                </div>

                {/* Bloco de Apresentação */}

                <div className="flex flex-col gap-5 w-11/12 mb-3 mt-3">
                    <h3 className={title}>
                        &mdash;&gt; Apresentação
                    </h3>

                    <p className={p}>
                        Meu nome é Matheus Henrique, tenho 25 anos e moro em Olinda, PE. Sou Desenvolvedor Fullstack, e meu foco atualmente é na área de desenvolvimento web.
                    </p>

                    <p className={p}>
                        Estou buscando melhorar cada vez mais pra me tornar um profissional capacitado e com ampla noção dos mais diversos conceitos de tecnologia e desenvolvimento no geral.
                    </p>

                    <p className={p}>
                        Me formei em Analise e Desenvolvimento de Sistemas em 2022, na Aeso Barros Melo, em Olinda, PE.

                    </p>

                    <p className={p}>
                        Atualmente estou me especializando em Engenharia de Software, na Universidade Frassinetti do Recife &#40;Fafire&#41;.
                    </p>
                </div>

                {/* Bloco de Jornada */}

                <div className="flex flex-col gap-5 w-11/12 mb-5">
                    <h3 className={title}>
                        &mdash;&gt; Jornada na área
                    </h3>

                    <p className={p}>
                        Meu primeiro contato com programação eu tinha 13/14 anos, comecei brincando em um site chamado code.org, que ensinava programação de forma simples por meio de blocos lógicos que determinavam a ação do jogador.
                    </p>

                    <p className={p}>
                        Só fui mexer com código de verdade quando eu tinha 17 anos, que foi quando entrei na faculdade. Lá eu adquiri uma base sólida de programação, começando logo de cara com Java.
                    </p>

                    <p className={p}>
                        Por conta de imaturidade na época, após me formar, eu acabei me afastando um pouco da área e não ingressando no mercado de trabalho. Porém, nunca fiquei totalmente afastado dos códigos, sempre mexia com algo de vez em quando.
                    </p>

                    <p className={p}>
                        No fim de 2025 eu resolvi voltar com tudo de uma vez, e desde então venho me preparando pra finalmente entrar no mercado de trabalho. Conhecendo e praticando com as tecnologias atuais do mercado.
                    </p>
                </div>

                <div className="flex flex-col bg-white text-black gap-3 pt-5">

                    {/* Bloco de Tecnologias */}

                    <div className="flex flex-col w-full gap-3">
                        <h3 className="reveal opacity-0 font-black text-xl pl-2 tracking-wider text-black">
                            Tecnologias
                        </h3>

                        <ListTech />
                    </div>

                    {/* Bloco de Conhecimentos Tecnicos */}

                    <div className="bg-white text-black flex flex-col w-full gap-3">
                        <h3 className="reveal opacity-0 font-black text-xl pl-2 tracking-wider text-black">
                            Conhecimentos Tecnicos
                        </h3>

                        <ul className={p}>
                            {aboutSkillsTec.map(skill => (
                                <li key={skill.id} className="reveal-r opacity-0">
                                    {skill.name}
                                </li>
                            ))}
                        </ul>

                    </div>

                    <span className="border-dashed border w-3/4 self-center mt-2"></span>

                    {/* Bloco de Contato */}

                    <div className="flex flex-col w-full gap-2">

                        <div className="flex gap-2 items-center justify-center w-1/3 self-center">
                            <a className="group" href={linkLinkedin} target="_blank">
                                <img src={linkIconLinkedinBlack} alt="" className="rounded-md transition duration-300 group-hover:transition group-hover:durantion-300 group-hover:bg-emerald-600 group-hover:cursor-pointer" />
                            </a>
                            <a className="group" href={linkGithub} target="_blank">
                                <img src={linkIconGithubBlack} alt="" className="rounded-md transition duration-300 group-hover:transition group-hover:durantion-300 group-hover:bg-emerald-600 group-hover:cursor-pointer" />
                            </a>
                        </div>

                        <span className="text-center font-black">
                            Gostou do que viu?
                        </span>

                        <p className="self-center p-1 border-2 border-b-4 w-3/4 font-extrabold -skew-x-5 flex justify-center gap-2 items-center">
                            me envie uma mensagem <MessageSquare size={20} />
                        </p>

                        <a href="CurriculoMathen.pdf" download="CurriculoMathen.pdf" className="p-3 pr-4 pl-4 w-3/4 self-center flex items-center text-sm justify-center gap-2 font-black tracking-wider text-white bg-black rounded-md">
                            Baixe meu currículo <ArrowDownToLine />
                        </a>
                    </div>

                    <span className="border-t w-full self-center"></span>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default AboutMePage

const GetWebsite = (props: any) => {
    return (
        <a href={linkWpp} className="reveal opacity-0 mt-2 mb-5 w-10/12 sm:w-2/3 lg:w-1/3 -ml-4 self-center text-center font-roboto font-extrabold p-3 outline text-sm outline-2 text-red-500 bg-black text-nowrap
        hover:bg-emerald-500 hover:text-black">
            <span className="animate-pulse">
                {props.text}
            </span>
        </a>
    )
}