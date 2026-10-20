import { stackList } from "../Utils/stack"

const MoreAboutMe = () => {
    return (
        <section
            id="about-me"
            className="reveal opacity-0 min-h-screen bg-gradient-to-br from-gray-400 via-gray-200 to-gray-400 px-5 py-16 text-black sm:px-8 lg:py-20"
        >
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
                <div className="reveal opacity-0 flex flex-col gap-7 rounded-3xl border border-gray-200/80 bg-white/80 p-6 shadow-[0_16px_50px_-35px_rgba(0,0,0,0.18)] sm:p-8">
                    <header className="reveal opacity-0 flex flex-col items-start gap-3">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 sm:text-sm">
                            Desenvolvimento de software
                        </p>
                        <h1 className="border-l-4 border-emerald-500 pl-4 text-3xl font-bold sm:text-4xl">
                            Sobre mim
                        </h1>
                    </header>

                    <div className="flex flex-col gap-5 text-base leading-relaxed text-gray-700 sm:text-lg">
                        <p className="reveal opacity-0">
                            Meu nome é Matheus Henrique, sou desenvolvedor Full Stack com foco em aplicações web. Construo soluções completas, da interface às integrações que conectam cada parte do sistema.
                        </p>

                        <p className="reveal opacity-0">
                            Sou formado em Análise e Desenvolvimento de Sistemas pela AESO Barros Melo e atualmente me especializo em Engenharia de Software na Faculdade Frassinetti do Recife.
                        </p>

                        <p className="reveal opacity-0">
                            Meu objetivo é aprofundar meus conhecimentos em engenharia de software e criar sistemas bem estruturados, confiáveis e fáceis de evoluir. Gosto de transformar problemas reais em soluções digitais práticas.
                        </p>
                    </div>
                </div>

                <section className="reveal opacity-0 flex flex-col gap-6 rounded-3xl border border-gray-200/80 bg-white/80 p-6 sm:p-8">
                    <header className="reveal opacity-0 flex flex-col items-start gap-3">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 sm:text-sm">
                            Ferramentas do dia a dia
                        </p>
                        <h2 className="border-l-4 border-emerald-500 pl-4 text-3xl font-bold sm:text-4xl">
                            Tecnologias
                        </h2>
                        <p className="max-w-xl leading-relaxed text-gray-600 sm:text-lg">
                            Tecnologias que uso para desenvolver interfaces, aplicações e sistemas conectados.
                        </p>
                    </header>
                    <ListTech />
                </section>
            </div>
        </section>
    )
}

export default MoreAboutMe

export const ListTech = () => {
    return (
        <div className="flex flex-col items-center lg:items-stretch">
            <div className="grid w-full grid-cols-4 gap-3 sm:grid-cols-4">
                {stackList.map(skill => (
                    <div
                        key={skill.id}
                        className="reveal opacity-0 group flex min-h-24 flex-col items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white p-3 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-md hover:shadow-emerald-950/10"
                    >
                        <img
                            src={skill.src}
                            alt={`${skill.title} logo`}
                            loading="lazy"
                            className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                        <p className="text-[0.68rem] font-semibold leading-tight text-gray-700 sm:text-xs">
                            {skill.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
