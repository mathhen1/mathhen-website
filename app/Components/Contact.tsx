import { linkInsta, linkMailTo, linkWpp } from "../Utils/links"

const Contact = () => {
    return (
        <div className="bg-black text-white h-full flex flex-col gap-5 lg:gap-3">
            <h1 className="reveal opacity-0 border-b-2 pt-2 self-center text-2xl font-bold">
                Social
            </h1>

            <div className="flex flex-col lg:flex-row gap-5 lg:gap-3 lg:w-10/12 lg:self-center">
                <div className="flex flex-col gap-5 lg:w-1/2">
                    <h2 className="reveal opacity-0 text-base text-center font-mono tracking-tighter font-bold">
                        Confira minhas redes
                    </h2>
                    <div className="flex flex-row gap-2 w-full sm:justify-center">
                        <div className="reveal-l opacity-0 text-xs grid grid-rows-3 justify-items-center sm:justify-items-start gap-3 p-5 w-1/2">
                            <a href={linkInsta} className="p-2 border-2 w-1/2 text-center -skew-y-5 -skew-x-5
                            transition duration-300 hover:transition hover:duration-300 
                            hover:bg-white hover:text-black hover:border-white hover:font-black">
                                Instagram
                            </a>
                            <a href={linkWpp} className="p-2 border-2 w-1/2 text-center -skew-y-5 -skew-x-5
                            transition duration-300 hover:transition hover:duration-300 
                            hover:bg-white hover:text-black hover:border-white hover:font-black">
                                WhatsApp
                            </a>
                            <a href={linkMailTo} className="p-2 border-2 w-1/2 text-center -skew-y-5 -skew-x-5
                            transition duration-300 hover:transition hover:duration-300 
                            hover:bg-white hover:text-black hover:border-white hover:font-black">
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

                </div>

                <div className="flex flex-col gap-5 lg:w-1/2">
                    <h2 className="reveal opacity-0 text-xs sm:text-base text-center font-mono tracking-tighter font-bold">
                        Você também pode deixar seu recado diretamente
                    </h2>

                    <form className="reveal opacity-0 self-center p-2 w-10/12 flex flex-col gap-2 text-sm">
                        <label htmlFor="nome" className="reveal opacity-0">
                            Nome:
                        </label>
                        <input id="nome" className="reveal opacity-0 text-xs border rounded-md p-2" type="text" placeholder="digite seu nome" />

                        <label htmlFor="email" className="reveal opacity-0">
                            E-mail:
                        </label>
                        <input id="email" className="reveal opacity-0 text-xs border rounded-md p-2" type="text" placeholder="digite seu email" />

                        <label htmlFor="content" className="reveal opacity-0">
                            Recado:
                        </label>
                        <textarea id="content" className="reveal opacity-0 text-xs border rounded-md p-2" maxLength={200} placeholder="digite seu recado" />

                        <button className="reveal opacity-0 w-2/3 sm:w-1/3 self-center p-2 mt-2 rounded-4xl border
                        transition duration-300 hover:transition hover:duration-300 hover:cursor-pointer
                        hover:bg-white hover:text-black hover:font-black">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
            <span className="lg:hidden reveal opacity-0 mb-2 h-px w-3/4 border-t-2 self-center"></span>
        </div>
    )
}

export default Contact