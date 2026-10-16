import { ArrowUpRight, BriefcaseBusiness, Building2, Check, PanelsTopLeft, Terminal } from "lucide-react";
import { linkWpp } from "../Utils/links";

const services = [
    {
        title: "Landing page",
        headline: "Transforme visitas em oportunidades",
        description: "Apresente uma oferta com clareza e conduza cada visitante até uma ação, como pedir um orçamento ou conhecer seu produto.",
        benefits: ["Conteúdo direto ao ponto", "Chamadas para ação bem posicionadas", "Experiência adaptada ao celular"],
        icon: PanelsTopLeft,
    },
    {
        title: "Portfólio profissional",
        headline: "Mostre seu trabalho com confiança",
        description: "Reúna projetos, experiência e formas de contato em uma vitrine digital que valoriza o que você faz.",
        benefits: ["Projetos apresentados com destaque", "Experiência e serviços organizados", "Contato fácil para novos clientes"],
        icon: BriefcaseBusiness,
    },
    {
        title: "Site institucional",
        headline: "Fortaleça a presença da sua empresa",
        description: "Apresente sua empresa, seus serviços e diferenciais em um site profissional, claro e acessível em qualquer dispositivo.",
        benefits: ["Informações centralizadas", "Identidade alinhada à sua marca", "Estrutura pronta para crescer"],
        icon: Building2,
    },
    {
        title: "Sistema personalizado",
        headline: "Simplifique processos do seu negócio",
        description: "Tenha uma solução desenvolvida para suas necessidades, com funcionalidades pensadas para a rotina da sua equipe.",
        benefits: ["Recursos definidos para o seu fluxo", "Mais organização no dia a dia", "Evolução conforme novas demandas"],
        icon: Terminal,
    },
];

const Services = () => {
    return (
        <section className="min-h-screen bg-gray-200 px-5 py-16 text-black sm:px-8 lg:py-20">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">

                <header className="reveal opacity-0 flex flex-col items-start gap-3 border-l-2 border-emerald-500 pl-5 sm:pl-7">
                    <p className="reveal opacity-0 text-xs font-bold uppercase tracking-[0.24em] text-emerald-700 sm:text-lg">
                        Serviços
                    </p>
                    <h2 className="reveal opacity-0 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                        Soluções digitais para o seu negócio
                    </h2>
                    <p className="reveal opacity-0 max-w-2xl text-base leading-relaxed text-gray-900 sm:text-lg">
                        Do primeiro contato à operação do dia a dia, escolha o formato que melhor atende ao seu objetivo.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
                    {services.map(service => {
                        const ServiceIcon = service.icon;
                        const message = encodeURIComponent(`Olá, gostaria de conversar sobre ${service.title.toLowerCase()}.`);

                        return (
                            <article
                                key={service.title}
                                className="reveal opacity-0 group flex h-full flex-col rounded-2xl border border-gray-200 border-t-4 border-t-emerald-500 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10 sm:p-7"
                            >
                                <div className="mb-5 flex items-center justify-between gap-4">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-100">
                                        <ServiceIcon aria-hidden="true" className="h-6 w-6" />
                                    </span>
                                    <span className="text-xs font-black uppercase tracking-[0.16em] text-emerald-800">
                                        {service.title}
                                    </span>
                                </div>

                                <h3 className="mb-3 text-xl font-bold leading-snug sm:text-2xl">
                                    {service.headline}
                                </h3>
                                <p className="mb-5 text-sm leading-relaxed text-gray-900 sm:text-base">
                                    {service.description}
                                </p>

                                <ul className="mb-7 flex flex-col gap-3">
                                    {service.benefits.map(benefit => (
                                        <li key={benefit} className="flex items-start gap-2 text-sm leading-relaxed text-gray-900">
                                            <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`${linkWpp}?text=${message}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-auto inline-flex items-center gap-2 self-start rounded-full bg-black px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-600 hover:text-black"
                                >
                                    Solicitar orçamento <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                                </a>
                            </article>
                        );
                    })}
                </div>

                <div className="reveal opacity-0 flex flex-col items-center gap-4 rounded-2xl bg-white border-b px-5 py-8 text-center sm:px-8">

                    <h3 className="text-2xl font-bold sm:text-3xl text-gray-900">
                        Tem um projeto em mente?
                    </h3>

                    <p className="max-w-2xl leading-relaxed text-gray-800">
                        Conte o que você precisa. Vamos conversar sobre a melhor solução para transformar sua ideia em um projeto digital.
                    </p>
                    <a
                        href={linkWpp}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-flex items-center gap-2 rounded-md bg-black px-6 py-3 font-black text-emerald-400 transition-colors hover:bg-emerald-700 hover:text-white"
                    >
                        Fale comigo <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
