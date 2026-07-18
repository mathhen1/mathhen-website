const Contact = () => {
    return (
        <div className="bg-black text-white h-full flex flex-col gap-5">
            <h1 className="reveal opacity-0 border-b-2 pt-2 self-center text-2xl font-bold">
                Social
            </h1>
            <h2 className="reveal opacity-0 text-base text-center font-mono tracking-tighter font-bold">
                Confira minhas redes
            </h2>
            <div className="flex flex-row gap-2 w-full">
                <div className="reveal-l opacity-0 text-xs grid grid-rows-3 justify-items-center gap-3 p-5 w-1/2">
                    <a href="" className="p-2 border-2 w-1/2 text-center -skew-y-5 -skew-x-5">
                        Instagram
                    </a>
                    <a href="" className="p-2 border-2 w-1/2 text-center -skew-y-5 -skew-x-5">
                        WhatsApp
                    </a>
                    <a href="" className="p-2 border-2 w-1/2 text-center -skew-y-5 -skew-x-5">
                        E-Mail
                    </a>
                </div>

                <div className="reveal-r opacity-0 grid grid-rows-3 justify-items-start items-center text-xs font-mono font-extrabold">
                    <p>
                        @theteuzz
                    </p>
                    <p>
                        +55 081 997347970
                    </p>
                    <p>
                        mathen.dev.z@gmail.com
                    </p>
                </div>
            </div>

            <h2 className="reveal opacity-0 text-xs text-center font-mono tracking-tighter font-bold">
                Você também pode deixar seu recado diretamente
            </h2>

            <form className="reveal opacity-0 self-center p-2 w-10/12 flex flex-col gap-2 text-sm">
                <label htmlFor="nome">
                    Nome:
                </label>
                <input id="nome" className="text-xs border rounded-md p-2" type="text" placeholder="digite seu nome" />

                <label htmlFor="email">
                    E-mail:
                </label>
                <input id="email" className="text-xs border rounded-md p-2" type="text" placeholder="digite seu email" />

                <label htmlFor="content">
                    Recado:
                </label>
                <textarea id="content" className="text-xs border rounded-md p-2" maxLength={200} placeholder="digite seu recado" />

                <button className="w-2/3 self-center p-2 mt-2 rounded-4xl border">
                    Enviar
                </button>
            </form>

            <span className="reveal opacity-0 mb-2 h-px w-3/4 border-t-2 self-center"></span>
        </div>
    )
}

export default Contact