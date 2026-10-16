import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { linkGithub, linkInsta, linkLinkedin, linkMailTo, linkWpp } from "../Utils/links";

const navigationLinks = [
    { label: "Início", href: "/#homepage" },
    { label: "Sobre mim", href: "/about" },
    { label: "Projetos", href: "/projects" },
];

const socialLinks = [
    { label: "Instagram", href: linkInsta, icon: FaInstagram },
    { label: "LinkedIn", href: linkLinkedin, icon: FaLinkedin },
    { label: "GitHub", href: linkGithub, icon: FaGithub },
    { label: "E-mail", href: linkMailTo, icon: Mail },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-white px-5 pb-5 font-mono text-black">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">

                <div className="grid gap-9 border-b border-gray-200 lg:pb-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-12 lg:pt-5">
                    <div>
                        <Logo />
                        <p className="mt-4 max-w-md leading-relaxed text-gray-600">
                            Desenvolvedor Full Stack. Desenvolvo sites e sistemas com foco em clareza, desempenho e experiência para quem usa.
                        </p>
                        <ul className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-gray-700">
                            <li className="rounded-full bg-gray-100 px-3 py-1.5">Systems Analysis and Development</li>
                            <li className="rounded-full bg-gray-100 px-3 py-1.5">Software Engineering</li>
                        </ul>
                    </div>

                    <nav aria-label="Links do site">
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-gray-500">
                            Explore
                        </h3>
                        <ul className="flex flex-col items-start gap-3">
                            {navigationLinks.map(link => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center gap-1 font-semibold text-gray-800 transition-colors hover:text-emerald-700 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                                    >
                                        {link.label}
                                        <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-gray-500">
                            Me encontre
                        </h3>
                        <ul className="flex flex-wrap gap-3">
                            {socialLinks.map(social => {
                                const SocialIcon = social.icon;
                                const isEmail = social.label === "E-mail";

                                return (
                                    <li key={social.label}>
                                        <a
                                            href={social.href}
                                            target={isEmail ? undefined : "_blank"}
                                            rel={isEmail ? undefined : "noreferrer"}
                                            aria-label={social.label}
                                            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-colors hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                                        >
                                            <SocialIcon aria-hidden="true" className="h-5 w-5" />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                        <a
                            href={linkWpp}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-flex items-center gap-2 font-semibold text-emerald-800 transition-colors hover:text-emerald-600"
                        >
                            Fale comigo <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-gray-500 sm:flex-row sm:text-left">
                    <p>
                        © {year} <span className="font-bold text-black">Mathen</span>. Todos os direitos reservados.
                    </p>
                    <p className="font-semibold">Feito com Next.js, React e Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

const Logo = () => {
    return (
        <Link href="/" className="inline-flex flex-col items-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600">
            <span className="font-nz bg-gradient-to-b from-slate-600 via-slate-500 to-black bg-clip-text text-5xl font-black text-transparent max-lg:pt-3">
                Mathhen
            </span>
            <span className="font-roboto text-sm tracking-tight">
                <span className="text-gray-700">Fullstack</span>{" "}
                <span className="font-black text-emerald-600">Developer</span>
            </span>
        </Link>
    );
};
