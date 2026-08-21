import { linkGithub, linkIconGithubBlack, linkIconInstaBlack, linkIconLinkedinBlack, linkIconWppBlack, linkInsta, linkLinkedin, linkWpp } from "../Utils/links"

const AboutMe = () => {
    return (
        <div id="homepage" className="animate-hero relative min-h-[95vh] bg-black text-white flex flex-col lg:flex-row gap-5">

            <div className="flex flex-col lg:justify-center lg:items-center gap-5 lg:w-1/2 lg:pl-3">
                <h1 className="text-5xl text-start lg:text-center mt-3 font-bold pl-2 text-wrap">
                    Construo sites <span className="font-extrabold text-emerald-500">modernos</span> e profissionais
                </h1>
                <h2 className="text-base lg:text-2xl text-start pl-2 font-light text-gray-300 tracking-tight">
                    Prezando qualidade, estetica e desempenho.
                </h2>

                <p className="text-sm lg:text-lg text-start pl-2">
                    <span className="text-emerald-500 font-black lg:font-bold lg:tracking-widest">&mdash;&gt; Sistemas digitais.</span> <span className="font-black lg:font-bold lg:tracking-widest bg-clip-text text-transparent
                bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300">Solucionando problemas.</span>
                </p>

                <img src="hero-mathen.jpg" alt=""
                    className="lg:hidden w-1/2 sm:w-1/4 rounded-full border-2 border-emerald-600 self-center" />

                <div className="grid grid-cols-4 self-center gap-2 w-1/2 sm:w-1/4">
                    <a className="group" href={linkInsta} target="_blank">
                        <img src={linkIconInstaBlack} alt="" className="p-1 bg-emerald-300 rounded-md transition duration-300 group-hover:transition group-hover:durantion-300 group-hover:bg-emerald-600 group-hover:cursor-pointer" />
                    </a>

                    <a className="group" href={linkLinkedin} target="_blank">
                        <img src={linkIconLinkedinBlack} alt="" className="bg-emerald-300 rounded-md transition duration-300 group-hover:transition group-hover:durantion-300 group-hover:bg-emerald-600 group-hover:cursor-pointer" />
                    </a>

                    <a className="group" href={linkWpp} target="_blank">
                        <img src={linkIconWppBlack} alt="" className="bg-emerald-300 rounded-md transition duration-300 group-hover:transition group-hover:durantion-300 group-hover:bg-emerald-600 group-hover:cursor-pointer" />
                    </a>

                    <a className="group" href={linkGithub} target="_blank">
                        <img src={linkIconGithubBlack} alt="" className="bg-emerald-300 rounded-md transition duration-300 group-hover:transition group-hover:durantion-300 group-hover:bg-emerald-600 group-hover:cursor-pointer" />
                    </a>
                </div>

                <p className="text-xs lg:text-sm text-center font-bold w-10/12 self-center">
                    Landing Pages. Portfolios. Sites institucionais. Sistemas Personalizados.
                </p>

                <a href={linkWpp} target="_blank"
                    className="self-center font-black border-emerald-500 border p-2 text-center w-3/4 sm:w-1/3
                border-2 rounded-4xl text-emerald-500 bg-gradient-to-r from-black via-gray-800 to-gray-700 animate-bg
                transition duration-300 hover:transition hover:duration-300 
                hover:[animation-play-state:paused] hover:text-white hover:border-white">
                    <span className="animate-pulse">
                        Entre em contato
                    </span>
                </a>

                <span className="mt-5 pt-5 h-px w-10/12 border-t border-gray-400 self-center"></span>
            </div>
            <div className="hidden lg:flex justify-center items-center lg:w-1/2 p-3">
                <img src="hero-mathen.jpg" alt=""
                    className="w-2/3 rounded-full border-3 border-emerald-600 self-center" />
            </div>
        </div>
    )
}

export default AboutMe