"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Instagram, Mail, MessageCircle } from "lucide-react";
import { linkInsta, linkMailTo, linkWpp } from "../Utils/links";

const contactMethods = [
    {
        label: "Instagram",
        value: "@theteuzz",
        detail: "Acompanhe meu trabalho",
        href: linkInsta,
        icon: Instagram,
        external: true,
    },
    {
        label: "WhatsApp",
        value: "+55 (81) 99734-7970",
        detail: "Vamos conversar sobre sua ideia",
        href: linkWpp,
        icon: MessageCircle,
        external: true,
    },
    {
        label: "E-mail",
        value: "mathen.dev.z@gmail.com",
        detail: "Envie uma mensagem por e-mail",
        href: linkMailTo,
        icon: Mail,
        external: false,
    },
];

const Contact = () => {
    const [formNotice, setFormNotice] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormNotice("Este formulário ainda não envia mensagens. Para falar comigo, use um dos canais de contato ao lado.");
    };

    return (
        <section className="min-h-screen bg-white px-5 py-16 text-black sm:px-8 lg:py-20">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
                <header className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700 sm:text-sm">
                        Contato
                    </p>
                    <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                        Vamos conversar sobre seu próximo projeto?
                    </h2>
                    <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                        Conte o que você tem em mente. Vamos encontrar um caminho claro para transformar sua ideia em uma experiência digital.
                    </p>
                </header>

                <div className="grid overflow-hidden rounded-3xl border border-gray-200 shadow-xl shadow-black/5 lg:grid-cols-[0.9fr_1.1fr]">
                    <aside className="relative flex flex-col justify-between overflow-hidden bg-black p-6 text-white sm:p-8 lg:p-10">
                        <div aria-hidden="true" className="absolute -right-20 -top-20 h-44 w-44 rounded-md border-3 border-emerald-500/50" />
                        <div aria-hidden="true" className="absolute -right-12 -top-12 h-30 w-30 rounded-md border-3 border-emerald-500/50" />

                        <div className="relative z-10">
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                                Fale diretamente
                            </p>
                            <h3 className="text-2xl font-bold sm:text-3xl">Prefere outro canal?</h3>
                            <p className="mt-3 max-w-md leading-relaxed text-gray-300">
                                Escolha a forma mais prática para você. Estou disponível para entender seu projeto e tirar suas dúvidas.
                            </p>
                        </div>

                        <div className="relative z-10 mt-8 flex flex-col gap-3">
                            {contactMethods.map(method => {
                                const ContactIcon = method.icon;

                                return (
                                    <a
                                        key={method.label}
                                        href={method.href}
                                        target={method.external ? "_blank" : undefined}
                                        rel={method.external ? "noreferrer" : undefined}
                                        className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-emerald-500/50 hover:bg-white/10"
                                    >
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                                            <ContactIcon aria-hidden="true" className="h-5 w-5" />
                                        </span>
                                        <span className="min-w-0 flex-1">
                                            <span className="block text-xs font-bold uppercase tracking-[0.14em] text-gray-400">
                                                {method.label}
                                            </span>
                                            <span className="mt-1 block truncate font-semibold text-white">
                                                {method.value}
                                            </span>
                                            <span className="mt-1 block text-sm text-gray-400">
                                                {method.detail}
                                            </span>
                                        </span>
                                        <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-gray-500 transition-colors group-hover:text-emerald-400" />
                                    </a>
                                );
                            })}
                        </div>
                    </aside>

                    <div className="bg-gray-50 p-6 sm:p-8 lg:p-10">
                        <div className="mb-7">
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                                Conte sua ideia
                            </p>
                            <h3 className="text-2xl font-bold sm:text-3xl">Envie seu recado</h3>
                            <p className="mt-2 leading-relaxed text-gray-600">
                                Preencha os campos abaixo para conhecer o protótipo do formulário.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="contact-name" className="text-sm font-semibold text-gray-800">
                                    Nome
                                </label>
                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Como você se chama?"
                                    required
                                    className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="contact-email" className="text-sm font-semibold text-gray-800">
                                    E-mail
                                </label>
                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="voce@exemplo.com"
                                    required
                                    className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="contact-message" className="text-sm font-semibold text-gray-800">
                                    Como posso ajudar?
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows={4}
                                    maxLength={500}
                                    placeholder="Conte um pouco sobre seu projeto..."
                                    required
                                    className="resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-emerald-600 px-6 py-3 font-bold text-black transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-600/30"
                            >
                                Enviar mensagem <ArrowRight aria-hidden="true" className="h-4 w-4" />
                            </button>

                            <p aria-live="polite" className="min-h-5 text-sm leading-relaxed text-gray-600">
                                {formNotice || "Protótipo: as mensagens ainda não são enviadas por este formulário."}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
