const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className="bg-white text-black font-mono flex flex-col p-2">
            <div className="flex flex-col gap-2 p-2 tracking-tight">
                <h1 className="border-l-2 pl-2 font-semibold">
                    Links da Pagina
                </h1>

                <ul className="flex flex-col w-max text-sm pl-2 gap-2">
                    <span className="border-b">
                        Homepage
                    </span>
                    <span className="border-b">
                        Projetos
                    </span>
                    <span className="border-b">
                        Serviços
                    </span>
                </ul>
            </div>

            <span className="h-px w-11/12 border-t border-gray-400 self-center mb-2 mt-2"></span>

            <div className="tracking-tighter flex flex-col gap-2 p-2">

                <h1 className="border-l-2 pl-2 font-semibold">
                    Contatos rapidos
                </h1>

                <ul className="flex flex-col w-max text-sm pl-2 gap-2">
                    <span className="border-b">
                        Instagram
                    </span>
                    <span className="border-b">
                        WhatsApp
                    </span>
                    <span className="border-b">
                        Linkedin
                    </span>
                </ul>
            </div>

            <span className="h-px w-3/4 self-center border-t mt-2 mb-2 border-black"></span>

            <p className="text-sm self-center">
                Copyrigth © {year} <span className="font-black tracking-widest">Mathen</span>;
            </p>
            <p className="text-sm self-center">
                Todos os direitos reservados.
            </p>
            <p className="text-sm font-semibold self-center border-b pb-2 tracking-tighter">
                Developed w/ NextJs, React & Tailwind.
            </p>
        </div>
    )
}

export default Footer