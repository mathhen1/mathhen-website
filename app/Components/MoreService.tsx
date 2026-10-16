import {
    ArrowUpRight,
    BadgeCheck,
    Clock3,
    Code2,
    FileText,
    Layers,
    Search,
} from "lucide-react";
import { linkWpp } from "../Utils/links";

const websiteBenefits = [
    {
        title: "Disponível o tempo todo",
        description: "Seu site apresenta seu trabalho a qualquer hora, inclusive quando você não está online.",
        icon: Clock3,
    },
    {
        title: "Mais fácil de encontrar",
        description: "Dê às pessoas um lugar claro para conhecer seus serviços quando pesquisarem pelo que você oferece.",
        icon: Search,
    },
    {
        title: "Tudo em um só lugar",
        description: "Reúna serviços, informações e contatos em um espaço organizado e fácil de consultar.",
        icon: Layers,
    },
    {
        title: "Uma presença com identidade",
        description: "Apresente seu negócio com uma experiência digital alinhada à sua marca e aos seus objetivos.",
        icon: BadgeCheck,
    },
];

const projectSteps = [
    {
        title: "Briefing e planejamento",
        description: "Alinhamos seus objetivos, público, conteúdo e funcionalidades para definir a direção do projeto.",
        icon: FileText,
    },
    {
        title: "Estrutura e conteúdo",
        description: "Organizo as informações e planejo uma navegação simples, com foco no que seu público precisa encontrar.",
        icon: Layers,
    },
    {
        title: "Design e desenvolvimento",
        description: "Transformo o planejamento em um site responsivo, funcional e pensado para a sua marca.",
        icon: Code2,
    },
    {
        title: "Revisão e publicação",
        description: "Revisamos os detalhes, fazemos os ajustes finais e preparo o site para entrar no ar.",
        icon: ArrowUpRight,
    },
];

const MoreService = () => {
    const contactMessage = encodeURIComponent("Olá, quero conversar sobre um projeto para o meu negócio.");

    return (
        <section className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-black to-[#0b1712] px-5 py-16 text-white sm:px-8 lg:py-20">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:gap-12">
                <header className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                    <p className="reveal opacity-0 text-xs font-bold uppercase tracking-[0.22em] text-emerald-400 sm:text-sm">
                        Por que ter um site?
                    </p>
                    <h2 className="reveal opacity-0 text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                        Um espaço digital que trabalha pelo seu negócio
                    </h2>
                    <p className="reveal opacity-0 text-base leading-relaxed text-gray-300 sm:text-lg">
                        Apresente o que você faz com clareza, ajude novos clientes a encontrar suas informações e facilite o próximo contato.
                    </p>
                </header>

                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-10">
                    <div className="grid gap-4 sm:grid-cols-2">
                        {websiteBenefits.map((benefit, index) => {
                            const BenefitIcon = benefit.icon;

                            return (
                                <article
                                    key={benefit.title}
                                    className="reveal opacity-0 flex flex-col rounded-2xl border border-white/10 bg-zinc-900/80 p-5 transition-colors duration-300 hover:border-emerald-500/50 sm:p-6"
                                >
                                    <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                                        <BenefitIcon aria-hidden="true" className="h-5 w-5" />
                                    </span>
                                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
                                        Benefício 0{index + 1}
                                    </p>
                                    <h3 className="mb-2 text-lg font-bold leading-snug sm:text-xl">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                                        {benefit.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>

                    <div className="reveal opacity-0 rounded-2xl border border-white/10 bg-zinc-900 p-6 sm:p-8">
                        <div className="reveal opacity-0 mb-7">
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                                Como funciona
                            </p>
                            <h3 className="text-2xl font-bold sm:text-3xl">
                                Do planejamento ao site no ar
                            </h3>
                            <p className="mt-3 leading-relaxed text-gray-400">
                                Você acompanha cada etapa e sabe o que estamos construindo juntos.
                            </p>
                        </div>

                        <ol className="reveal opacity-0 flex flex-col">
                            {projectSteps.map((step, index) => {
                                const StepIcon = step.icon;
                                const isLastStep = index === projectSteps.length - 1;

                                return (
                                    <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
                                        {!isLastStep && (
                                            <span aria-hidden="true" className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-white/15" />
                                        )}
                                        <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-500/40 bg-zinc-900 text-emerald-400">
                                            <StepIcon aria-hidden="true" className="h-4 w-4" />
                                        </span>
                                        <div className="pt-0.5">
                                            <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
                                                Etapa 0{index + 1}
                                            </p>
                                            <h4 className="font-bold sm:text-lg">{step.title}</h4>
                                            <p className="mt-1 text-sm leading-relaxed text-gray-400">
                                                {step.description}
                                            </p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>

                <div className="reveal opacity-0 flex flex-col items-start gap-5 rounded-2xl border border-emerald-500/20 bg-zinc-900 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
                    <div className="reveal opacity-0 max-w-2xl">
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                            Próximo passo
                        </p>
                        <h3 className="text-2xl font-bold sm:text-3xl">Vamos tirar sua ideia do papel?</h3>
                        <p className="mt-2 leading-relaxed text-gray-400">
                            Conte um pouco sobre seu negócio e vamos conversar sobre uma solução que faça sentido para você.
                        </p>
                    </div>
                    <a
                        href={`${linkWpp}?text=${contactMessage}`}
                        target="_blank"
                        rel="noreferrer"
                        className="reveal opacity-0 inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-bold text-black transition-colors hover:bg-emerald-400"
                    >
                        Fale comigo <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MoreService;
