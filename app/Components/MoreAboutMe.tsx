const MoreAboutMe = () => {
    return (
        <div id="about-me" className="flex flex-col items-center gap-5 border-t border-black">
            <h1 className="text-2xl pt-2 border-b-2">
                Sobre mim
            </h1>

            <div className="flex flex-col items-center gap-5">
                <p className="w-10/12 text-start font-mono tracking-tighter">
                    Meu nome é Matheus Henrique, sou desenvolvedor fullstack. Hoje atuo na area de Desenvolvimento Web, construindo websites completos.
                </p>

                <p className="w-10/12 text-start font-mono tracking-tighter">
                    Sou formado em (ADS) Analise e Desenvolvimento de Sistemas, pela Aeso Barros Melo. E hoje em dia estou me especializando em Engenharia de Software, pela Faculdade Frassinetti do Recife.
                </p>

                <p className="w-10/12 text-start font-mono tracking-tighter">
                    Meu grande objetivo na area tech é me tornar um profissional cada vez mais completo e capacitidado, com noção ampla das mais diversas situações. Planejo utilizar meus conhecimentos para construir sistemas e tecnologias completas.
                </p>
            </div>
        </div>
    )
}

export default MoreAboutMe