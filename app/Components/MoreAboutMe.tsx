import { stackList } from "../Utils/stack"

const MoreAboutMe = () => {
    return (
        <div id="about-me" className="flex flex-col items-center gap-5 bg-white text-black border-t border-black">
            <h1 className="reveal opacity-0 self-start ml-2 text-3xl pl-2 border-l-3 font-bold mt-6 mb-3">
                Sobre mim
            </h1>

            <div className="flex flex-col items-center gap-5 font-normal font-mono">
                <p className="reveal opacity-0 w-10/12 text-start tracking-tighter">
                    Meu nome é Matheus Henrique, sou desenvolvedor fullstack. Hoje atuo na area de Desenvolvimento Web, construindo websites completos.
                </p>

                <p className="reveal opacity-0 w-10/12 text-start tracking-tighter">
                    Sou formado em (ADS) Analise e Desenvolvimento de Sistemas, pela Aeso Barros Melo. E hoje em dia estou me especializando em Engenharia de Software, pela Faculdade Frassinetti do Recife.
                </p>

                <p className="reveal opacity-0 w-10/12 text-start tracking-tighter">
                    Meu grande objetivo na area tech é me tornar um profissional cada vez mais completo e capacitidado, com noção ampla das mais diversas situações. Planejo utilizar meus conhecimentos para construir sistemas e tecnologias completas.
                </p>
            </div>

            <span className="reveal opacity-0 w-10/12 border-t border-gray-400 h-px"></span>

            <h2 className="reveal opacity-0 text-xl border-b-2 font-bold">Tecnologias</h2>

            <div className="grid grid-cols-5 w-11/12 gap-2">
                {stackList.map(skill => (
                    <div key={skill.id} className="reveal opacity-0 border-2 p-2 pb-1 flex flex-col justify-center gap-2 items-center">
                        <img src={skill.src} alt="" className="reveal opacity-0 " />
                        <p className="reveal opacity-0 text-[clamp(0.5rem,2vw,1rem)]">{skill.title}</p>
                    </div>
                ))}
            </div>

            <span className="w-10/12 border-t-2 border-gray-400 h-px mb-10"></span>
        </div>
    )
}

export default MoreAboutMe