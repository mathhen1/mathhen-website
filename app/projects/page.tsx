"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, ExternalLink, Layers3 } from "lucide-react"
import { useState } from "react"
import Footer from "../Components/Footer"
import NavBar from "../Components/NavBar"
import { linkWpp } from "../Utils/links"
import { listProjects } from "../Utils/projects"
import { FaGithub } from "react-icons/fa"

const ProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const categories = Array.from(new Set(listProjects.map(project => project.category)))
    const visibleProjects = selectedCategory === "all"
        ? listProjects
        : listProjects.filter(project => project.category === selectedCategory)

    return (
        <main className="min-h-screen overflow-hidden bg-black font-mono text-white">
            <NavBar />

            <section className="relative isolate px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-28 lg:pt-20">
                <div aria-hidden="true" className="pointer-events-none absolute -right-36 top-0 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
                <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-96 -z-10 h-80 w-80 rounded-full bg-emerald-900/20 blur-3xl" />

                <div className="mx-auto max-w-7xl">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-emerald-400/60 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                        <ArrowLeft aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Voltar ao início
                    </Link>

                    <header className="mt-12 grid gap-8 border-b border-white/10 pb-10 lg:mt-16 lg:grid-cols-[1fr_auto] lg:items-end lg:pb-14">
                        <div className="max-w-3xl">
                            <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-emerald-400 sm:text-sm">
                                <span className="h-px w-8 bg-emerald-400" /> Portfólio · Projetos
                            </p>
                            <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                                Ideias que viram <span className="text-emerald-400">experiências digitais.</span>
                            </h1>
                            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                                Conheça projetos desenvolvidos para apresentar negócios, aproximar pessoas e resolver necessidades reais com tecnologia.
                            </p>
                        </div>

                        <div className="flex gap-3 lg:pb-1">
                            <div className="min-w-32 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                <p className="text-3xl font-black text-emerald-400">{listProjects.length.toString().padStart(2, "0")}</p>
                                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-gray-400">Projetos</p>
                            </div>
                            <div className="min-w-32 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                <p className="text-3xl font-black text-white">{categories.length.toString().padStart(2, "0")}</p>
                                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-gray-400">Categorias</p>
                            </div>
                        </div>
                    </header>

                    <div className="flex flex-col gap-5 py-8 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Uma seleção do meu trabalho</p>
                            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Projetos em destaque</h2>
                        </div>

                        <div role="group" aria-label="Filtrar projetos por categoria" className="flex flex-wrap gap-2">
                            {[{ value: "all", label: "Todos" }, ...categories.map(category => ({ value: category, label: category }))].map(category => {
                                const isSelected = selectedCategory === category.value

                                return (
                                    <button
                                        key={category.value}
                                        type="button"
                                        aria-pressed={isSelected}
                                        onClick={() => setSelectedCategory(category.value)}
                                        className={`rounded-full border px-4 py-2 text-sm font-semibold capitalize transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${isSelected
                                            ? "border-emerald-400 bg-emerald-400 text-black shadow-[0_0_24px_rgba(52,211,153,0.16)]"
                                            : "border-white/15 text-gray-300 hover:border-emerald-400/60 hover:text-emerald-300"
                                            }`}
                                    >
                                        {category.label}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                        {visibleProjects.map((project, index) => (
                            <article
                                key={project.id}
                                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/95 to-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
                            >
                                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
                                    <Image
                                        src={`/${project.src}`}
                                        alt={`Prévia do projeto ${project.name}`}
                                        fill
                                        sizes="(max-width: 1023px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
                                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/65 px-3 py-1.5 text-xs font-semibold capitalize text-white backdrop-blur-sm">
                                        <Layers3 aria-hidden="true" className="h-3.5 w-3.5 text-emerald-400" />
                                        {project.categoryLabel}
                                    </div>
                                    <span className="absolute bottom-5 right-5 text-xs font-bold tracking-[0.16em] text-white/70">{String(index + 1).padStart(2, "0")}</span>
                                </div>

                                <div className="flex flex-1 flex-col p-5 sm:p-7">
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.13em] text-gray-500">
                                        <span>{project.projectType}</span>
                                        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-emerald-500" />
                                        <span>{project.status}</span>
                                    </div>
                                    <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">{project.name}</h3>
                                    <p className="mt-2 text-sm font-semibold text-emerald-300 sm:text-base">{project.tagline}</p>
                                    <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">{project.desc}</p>

                                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                                        {project.highlights.map(highlight => (
                                            <li key={highlight} className="flex items-start gap-2 text-sm leading-6 text-gray-300">
                                                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>

                                    <ul aria-label="Tecnologias utilizadas" className="mt-6 flex flex-wrap gap-2">
                                        {project.stack.map(technology => (
                                            <li key={technology.id} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-gray-200">
                                                {technology.title}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                                        {project.liveUrl ? (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group/button inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-bold text-black transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-[0_8px_24px_rgba(52,211,153,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                                            >
                                                Acessar projeto <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                                            </a>
                                        ) : (
                                            <span aria-disabled="true" title="O link será adicionado quando o deploy estiver disponível" className="inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-gray-500">
                                                <ExternalLink aria-hidden="true" className="h-4 w-4" /> Deploy em breve
                                            </span>
                                        )}
                                        {project.repoUrl && (
                                            <a
                                                href={project.repoUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-gray-200 transition-colors hover:border-emerald-400/50 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                                            >
                                                <FaGithub aria-hidden="true" className="h-4 w-4" /> Código-fonte
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <aside className="mt-12 flex flex-col gap-5 rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.07] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Vamos construir o próximo?</p>
                            <h2 className="mt-2 text-xl font-bold sm:text-2xl">Tem uma ideia para tirar do papel?</h2>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-300">Conte o que você precisa e vamos encontrar uma solução digital que faça sentido para o seu negócio.</p>
                        </div>
                        <a
                            href={linkWpp}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-bold text-black transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-[0_8px_24px_rgba(52,211,153,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        >
                            Vamos conversar <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                        </a>
                    </aside>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default ProjectsPage
