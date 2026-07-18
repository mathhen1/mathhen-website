import { linkIconInstaBlack, linkIconLinkedinBlack, linkIconWppBlack, linkWpp } from "../Utils/links"

const AboutMe = () => {
    return (
        <div id="homepage" className="animate-hero relative min-h-[95vh] bg-black text-white flex flex-col gap-3">

            <h1 className="text-4xl lg:text-5xl text-start mt-3 font-bold pl-2 text-wrap w-2/3">
                Construo sites <span className="font-extrabold text-emerald-500">modernos</span> e profissionais
            </h1>
            <h2 className="text-base text-start pl-2 font-light text-gray-300 tracking-tight">
                Prezando qualidade, estetica e desempenho.
            </h2>

            <p className="text-sm text-start pl-2">
                <span className="text-emerald-500 font-black">&mdash;&gt; Sistemas digitais.</span> <span className="font-black bg-clip-text text-transparent
                bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300">Solucionando problemas.</span> 
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

            <div className="grid grid-cols-3 self-center gap-2 w-1/2 pr-4 pl-4">
                <img src={linkIconInstaBlack} alt="" className="p-1 bg-emerald-500 rounded-xl" />
                <img src={linkIconLinkedinBlack} alt="" className="p-1 bg-emerald-500 rounded-xl" />
                <img src={linkIconWppBlack} alt="" className="p-1 bg-emerald-500 rounded-xl" />
            </div>

            <p className="text-xs text-center font-bold w-10/12 self-center">
                Landing Pages. Portfolios. Sites institucionais. Sistemas Personalizados.
            </p>

            <a href={linkWpp}
                className="self-center font-black border-emerald-500 border p-2 text-center w-3/4
                border-2 rounded-4xl text-emerald-500 bg-gradient-to-r from-black via-gray-800 to-gray-700 animate-bg">
                <span className="animate-pulse">
                    Entre em contato
                </span>
            </a>

            <span className="absolute bottom-2 h-px w-10/12 border-t border-gray-400 self-center"></span>

        </div>
    )
}

export default AboutMe