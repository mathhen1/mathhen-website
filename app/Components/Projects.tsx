import Image from "next/image";
import { ArrowRightSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { listProjects } from "../Utils/projects";

const Projects = () => {
    const router = useRouter();

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-black py-14 font-mono tracking-tighter text-white">
            <div className="flex w-full max-w-6xl flex-col gap-8 px-5 sm:px-8">
                <header className="reveal opacity-0 flex flex-col items-start gap-3 border-l-2 border-emerald-500 pl-5 sm:pl-7">
                    <p className="reveal opacity-0 text-xs font-bold uppercase tracking-[0.24em] text-emerald-400 sm:text-sm">
                        Meus projetos
                    </p>
                    <h2 className="reveal opacity-0 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                        Projetos em destaque
                    </h2>
                    <p className="reveal opacity-0 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
                        Conheça alguns dos sistemas que desenvolvi e as soluções criadas para cada negócio.
                    </p>
                </header>

                <div className="flex flex-col divide-y divide-white/15">
                    {listProjects.map(project => (
                        <article
                            key={project.id}
                            className="reveal opacity-0 grid gap-6 py-7 sm:py-9 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:py-11"
                        >
                            <div className="group/image relative aspect-[16/9] overflow-hidden rounded-lg border border-white/10 bg-zinc-900 lg:aspect-[16/10]">
                                <Image
                                    src={`/${project.src}`}
                                    alt={`Prévia do projeto ${project.name}`}
                                    fill
                                    sizes="(max-width: 1023px) 100vw, 55vw"
                                    className="object-cover transition-transform duration-500 ease-out group-hover/image:scale-105"
                                />
                            </div>

                            <div className="flex flex-col items-start gap-4 lg:gap-5 lg:pl-4 xl:pl-8">
                                <span className="rounded-full border border-emerald-500/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
                                    {project.category}
                                </span>

                                <h3 className="text-2xl font-bold leading-tight tracking-normal text-emerald-400 sm:text-3xl">
                                    {project.name}
                                </h3>

                                <p className="max-w-xl text-sm leading-7 tracking-normal text-gray-300 sm:text-base">
                                    {project.desc}
                                </p>

                                <ul aria-label="Tecnologias utilizadas" className="flex flex-wrap gap-2 pt-1">
                                    {project.stack.map(technology => (
                                        <li
                                            key={technology.id}
                                            className="rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-normal text-gray-100 sm:text-sm"
                                        >
                                            {technology.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={() => router.push("/projects")}
                    className="flex items-center justify-center gap-2 self-center rounded-md border-2 border-emerald-500 px-6 py-3 text-sm font-bold text-emerald-400 transition-colors duration-300 hover:bg-emerald-500 hover:text-black sm:text-base hover:cursor-pointer"
                >
                    Ver todos os projetos <ArrowRightSquare className="h-5 w-5" />
                </button>
            </div>
        </section>
    );
};

export default Projects;
