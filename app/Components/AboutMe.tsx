import { linkIconInstaBlack, linkIconLinkedin, linkIconLinkedinBlack, linkIconWpp, linkIconWppBlack, linkWpp } from "../Utils/links"

const AboutMe = () => {
    return (
        <div className="relative h-[90vh] bg-black text-white flex flex-col gap-3">

            <h1 className="text-4xl lg:text-5xl text-start mt-3 font-bold pl-2">
                Construo sites modernos e profissionais
            </h1>
            <h2 className="text-lg text-start pl-2">
                Prezando qualidade, estetica e desempenho.
            </h2>

            <p className="text-sm text-start pl-2">
                Sistemas digitais focados em solucionar problemas
            </p>

            {/* <p className="text-sm">
                Sempre buscando evolução. Progressão gradual.
            </p> */}
            {/* 
            <h2 className="text-center font-black tracking-widest text-lg">
                Mathen - FullStack Dev
            </h2> */}

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMpY7Cwb9_KvJxV5JdpgiNe5DV5pLjch949RPeYFYIURMitqjK2xsaqUt&s=10" alt=""
                className="rounded-full w-2/3 self-center" />

            <div className="grid grid-cols-3 self-center gap-3 w-1/2">
                <img src={linkIconInstaBlack} alt="" className="p-1 bg-gray-600 rounded-xl" />
                <img src={linkIconLinkedinBlack} alt="" className="p-1 bg-gray-600 rounded-xl" />
                <img src={linkIconWppBlack} alt="" className="p-1 bg-gray-600 rounded-xl" />
            </div>

            <p className="text-xs text-center font-bold w-10/12 self-center">
                Landing Pages. Portfolios. Sites institucionais. Sistemas Personalizados.
            </p>

            <a href={linkWpp}
                className="self-center font-black text-emerald-500 border p-2 text-center w-10/12
                border-2 bg-slate-950">
                <span className="animate-pulse">
                    Entre em contato
                </span>
            </a>

            <span className="absolute bottom-2 h-px w-10/12 border-t border-gray-400 self-center"></span>

        </div>
    )
}

export default AboutMe