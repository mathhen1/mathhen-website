import { linkWpp } from "../Utils/links"

const MoreService = () => {
    return (
        <div className="flex flex-col gap-3 bg-white text-black h-full">
            <h1 className="reveal opacity-0 mt-8 mb-3 text-2xl font-extrabold ml-2 border-l-2 pl-1 w-11/12">
                Por que devo ter um site?
            </h1>
            <p className="reveal-r opacity-0 text-xs pl-2 text-gray-600 tracking-tighter border-2 p-2 w-10/12 ml-1 self-start">
                <span className="text-black font-bold">&bull; Ter seu proprio site, significa ter uma vitrine 24/7.</span> Seu trabalho fica visível 100% do tempo, e clientes novos podem chegar mesmo enquanto você dorme.
            </p>
            <p className="reveal-l opacity-0 text-xs pl-2 text-gray-600 tracking-tighter border-2 p-2 w-10/12 mr-1 self-end">
                <span className="text-black font-bold">&bull; Visibilidade no Google.</span> Milhões de pesquisas diariamente no maior buscador da internet, se alguém precisa de um serviço ou tem duvida sobre algo, onde ela pesquisa? Essa pessoa pode acabar te encontrando.
            </p>
            <p className="reveal-r opacity-0 text-xs pl-2 text-gray-600 tracking-tighter border-2 p-2 w-10/12 ml-1 self-start">
                <span className="text-black font-bold">&bull; Centralização de informações e conteúdo.</span> Todo conteúdo informativo a respeito do seu negócio ficará disponivel e será de facil acesso para qualquer pessoa.
            </p>
            <p className="reveal-l opacity-0 text-xs pl-2 text-gray-600 tracking-tighter border-2 p-2 w-10/12 mr-1 self-end">
                <span className="text-black font-bold">&bull; Novas conexões.</span> Mais pessoas poderão ter acesso ao seu serviço. Com isso, novos clientes e perceiros estarão a sua espera. Um novo publico pode ser atraído pelo seu negocio.
            </p>

            <h1 className="reveal opacity-0 mt-3 mb-2 text-2xl font-bold ml-2 border-l-2 pl-1 w-11/12">
                Como funciona o processo de criação?
            </h1>

            <div className="flex flex-col gap-2 w-10/12 items-start ml-2 pl-1">

                <span className="reveal-l opacity-0">
                    <p className="text-xs p-2 border-2 -skew-x-3 border-b-4 border-r-4">
                        <span className="text-sm font-bold">Briefing </span> &mdash; Coleta de informações sobre você e o seu negócio.
                    </p>
                </span>
                <span className="reveal-l opacity-0">
                    <p className="text-xs p-2 border-2 -skew-x-3 border-b-4 border-r-4">
                        <span className="text-sm font-bold">Copywriting </span> &mdash; Adaptação e estruturação dos textos usados para conversão de clientes.
                    </p>
                </span>
                <span className="reveal-l opacity-0">
                    <p className="text-xs p-2 border-2 -skew-x-3 border-b-4 border-r-4">
                        <span className="text-sm font-bold">Coding </span> &mdash; O processo real de desenvolvimento do site.
                    </p>
                </span>

                <span className="reveal-l opacity-0">
                    <p className="text-xs p-2 border-2 -skew-x-3 border-b-4 border-r-4">
                        <span className="text-sm font-bold">Hospedagem e DNS </span> &mdash; É o responsavel por dar nome ao seu site, e deixar ele ativo 24 horas.
                    </p>
                </span>

                <span className="reveal-l opacity-0">
                    <p className="text-xs p-2 border-2 -skew-x-3 border-b-4 border-r-4">
                        <span className="text-sm font-bold">Finalização </span> &mdash; Na etapa final, te apresento o projeto e ele passa a ser liberado para uso oficial.
                    </p>
                </span>

            </div>

            <h2 className="reveal-r opacity-0 w-3/4 self-center text-center p-2 pb-0 border-t font-bold tracking-wide font-mono">
                Você tem interesse em um projeto?
            </h2>

            <a href={linkWpp} target="_blank" className="reveal-l opacity-0 mb-6 w-3/4 border bg-black text-white font-black rounded-4xl p-2 text-center self-center font-mono">
                <span className="animate-pulse">
                    Fale comigo
                </span>
            </a>
        </div>
    )
}

export default MoreService