const MoreService = () => {
    return (
        <div className="flex flex-col gap-3 bg-white text-black h-full">
            <h1 className="mt-3 text-2xl font-extrabold ml-2 border-l-2 pl-1 w-11/12">
                Por que devo ter um site?
            </h1>
            <p className="text-sm pl-2 text-gray-600 tracking-tighter border-2 p-2 w-10/12 ml-1 self-start">
                <span className="text-black font-bold">&bull; Ter seu proprio site, significa ter uma vitrine 24/7.</span> Sempre disponivel para visitas e pesquisas a respeito do seu trabalho. Seu trabalho fica exposto 100% do tempo, e clientes novos podem chegar mesmo enquanto você dorme.
            </p>
            <p className="text-sm pl-2 text-gray-600 tracking-tighter border-2 p-2 w-10/12 mr-1 self-end">
                <span className="text-black font-bold">&bull; Visibilidade no Google.</span> Milhões de pesquisas diariamente no maior buscador da internet, se alguém precisa de um serviço proximo dela, onde ela irá procurar? Se alguém tem duvida sobre algo, onde ela pesquisa? Essa pessoa pode acabar te encontrando.
            </p>

            <h1 className="mt-2 text-2xl font-bold ml-2 border-l-2 pl-1 w-11/12">
                Como funciona o processo de criação?
            </h1>

            <div className="flex flex-col gap-2 w-10/12 items-start ml-2 pl-1">

                <p className="text-sm p-2 border-2 -skew-x-3 border-b-4 border-r-4">
                    <span className="text-base font-bold">Briefing </span> &mdash; Coleta de informações sobre você e o seu negócio.
                </p>
                <p className="text-sm p-2 border-2 -skew-x-3 border-b-4 border-r-4">
                    <span className="text-base font-bold">Copywriting </span> &mdash; Adaptação e estruturação dos textos usados para conversão de clientes.
                </p>
                <p className="text-sm p-2 border-2 -skew-x-3 border-b-4 border-r-4">
                    <span className="text-base font-bold">Coding </span> &mdash; O processo real de desenvolvimento do site.
                </p>
                <p className="text-sm p-2 border-2 -skew-x-3 border-b-4 border-r-4">
                    <span className="text-base font-bold">Hospedagem e DNS </span> &mdash; É o responsavel por dar nome ao seu site, e deixar ele ativo 24 horas.
                </p>
                <p className="text-sm p-2 border-2 -skew-x-3 border-b-4 border-r-4">
                    <span className="text-base font-bold">Finalização </span> &mdash; Na etapa final, te apresento o projeto e ele passa a ser liberado para uso oficial.
                </p>

            </div>

            <h2 className="w-3/4 self-center text-center p-2 pb-0 border-t font-bold tracking-wide font-mono">
                Tem interesse em um projeto?
            </h2>

            <a href="" className="mb-3 w-3/4 border bg-emerald-500 text-white font-black rounded-4xl p-2 text-center self-center">
                Fale comigo
            </a>
        </div>
    )
}

export default MoreService