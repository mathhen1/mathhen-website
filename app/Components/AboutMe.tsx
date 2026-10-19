import Image from "next/image"
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { linkGithub, linkInsta, linkLinkedin, linkWpp } from "../Utils/links"
import heroMathen from "../../public/hero-mathen.jpg"
import DownloadResume from "./DownloadResume"

const socialLinkClass = "group mx-auto flex aspect-square w-full max-w-12 items-center justify-center rounded-xl border border-emerald-400/30 bg-white/5 text-emerald-300 shadow-sm shadow-emerald-950/30 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-300 hover:text-black hover:shadow-md hover:shadow-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"

const AboutMe = () => {
    return (
        <div id="homepage" className="animate-hero relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-black to-[#0b1712] text-white flex flex-col lg:flex-row gap-5 lg:-mt-5 lg:pb-3">

            <div className="flex flex-col lg:justify-center lg:items-center gap-5 lg:w-1/2 lg:pl-3">
                <span className="w-5/6">
                    <h1 className="reveal opacity-0 text-4xl lg:text-7xl text-start mt-3 font-bold pl-2 text-wrap">
                        Construo sites <span className="font-extrabold text-emerald-500">modernos</span> e profissionais
                    </h1>
                </span>
                <h2 className="reveal opacity-0 text-base lg:text-2xl text-start font-light text-gray-300 tracking-tight pl-2">
                    Com foco em qualidade, estética e desempenho.
                </h2>

                <p className="reveal opacity-0 text-sm lg:text-xl text-start pl-2">
                    <span className="text-emerald-500 font-black lg:font-bold lg:tracking-widest">Soluções digitais</span> <span className="font-black lg:font-bold lg:tracking-widest bg-clip-text text-transparent
                bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300">que resolvem problemas reais</span>
                </p>

                <Image
                    priority
                    fetchPriority="high"
                    placeholder="blur"
                    src={heroMathen}
                    alt="Matheus Henrique, desenvolvedor full stack"
                    sizes="(max-width: 639px) 50vw, (max-width: 1023px) 25vw"
                    className="photo-float lg:hidden w-1/2 sm:w-1/4 rounded-full border-2 border-emerald-600 self-center backdrop-blur-md"
                />

                <p className="reveal opacity-0 text-xs lg:text-sm text-center font-bold w-10/12 self-center">
                    Landing pages, Portfólios, Websites Institucionais e Sistemas Personalizados
                </p>

                <div className="reveal opacity-0 grid grid-cols-4 self-center gap-2 w-1/2 sm:w-1/4">
                    <a aria-label="Instagram" className={socialLinkClass} href={linkInsta} target="_blank" rel="noreferrer">
                        <FaInstagram aria-hidden="true" className="h-7 w-7" />
                    </a>

                    <a aria-label="LinkedIn" className={socialLinkClass} href={linkLinkedin} target="_blank" rel="noreferrer">
                        <FaLinkedin aria-hidden="true" className="h-7 w-7" />
                    </a>

                    <a aria-label="WhatsApp" className={socialLinkClass} href={linkWpp} target="_blank" rel="noreferrer">
                        <FaWhatsapp aria-hidden="true" className="h-7 w-7" />
                    </a>

                    <a aria-label="GitHub" className={socialLinkClass} href={linkGithub} target="_blank" rel="noreferrer">
                        <FaGithub aria-hidden="true" className="h-7 w-7" />
                    </a>
                </div>


                <div className="flex w-3/4 flex-col items-center gap-3 sm:flex-row sm:justify-center self-center">
                    <a href={linkWpp} target="_blank"
                        rel="noreferrer"
                        className="reveal opacity-0 group inline-flex min-h-12 w-full items-center justify-center gap-2 self-center rounded-xl border border-emerald-300 bg-emerald-400 px-4 text-center text-sm font-bold tracking-wide text-black shadow-lg shadow-emerald-950/40 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-300 hover:shadow-xl hover:shadow-emerald-500/20 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-1/2">
                        <FaWhatsapp aria-hidden="true" className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                        <span>
                            Entre em contato
                        </span>
                    </a>
                    <DownloadResume className="reveal opacity-0 group flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-emerald-400/60 bg-white/5 px-4 text-center font-bold text-white shadow-md shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-300/10 hover:text-emerald-200 hover:shadow-lg hover:shadow-emerald-500/10 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-1/2 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:transition-transform [&>svg]:duration-300 [&:hover>svg]:translate-y-0.5" />
                </div>

            </div>
            <div className="hidden lg:flex justify-center items-center lg:w-1/2">
                <Image
                    priority
                    fetchPriority="high"
                    placeholder="blur"
                    src={heroMathen}
                    alt="Matheus Henrique, desenvolvedor full stack"
                    sizes="(min-width: 1024px) 33vw"
                    className="photo-float w-2/3 rounded-full border-3 border-emerald-600 self-center"
                />
            </div>
        </div>
    )
}

export default AboutMe
