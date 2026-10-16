import { stackList } from "./stack"

export type Project = {
    id: number
    name: string
    tagline: string
    desc: string
    src: string
    stack: typeof stackList
    category: string
    categoryLabel: string
    projectType: string
    status: string
    highlights: string[]
    liveUrl?: string
    repoUrl?: string
}

const listProjects: Project[] = [{
    id: 0,
    name: "Thays Helena — Personal Trainer",
    tagline: "Uma presença digital à altura de um cuidado personalizado",
    desc: "Site profissional para apresentar o trabalho de Thays Helena, personal trainer com foco em exercício clínico. A experiência organiza os serviços e ajuda novos alunos a conhecerem sua atuação.",
    src: "website-thays.png",
    stack: [stackList[1], stackList[2], stackList[5]],
    category: "web",
    categoryLabel: "Desenvolvimento web",
    projectType: "Site profissional",
    status: "Projeto desenvolvido",
    highlights: [
        "Apresentação clara dos serviços",
        "Conteúdo pensado para novos alunos"
    ]
}, {
    id: 1,
    name: "Ellen Souza — Produção de eventos",
    tagline: "Experiência e personalidade em um portfólio digital",
    desc: "Portfólio digital para apresentar a trajetória de Ellen Souza como promotora de eventos. O site reúne sua experiência em uma vitrine profissional e facilita o contato para novas oportunidades.",
    src: "website-ellen.png",
    stack: [stackList[1], stackList[2], stackList[5]],
    category: "web",
    categoryLabel: "Desenvolvimento web",
    projectType: "Portfólio profissional",
    status: "Projeto desenvolvido",
    highlights: [
        "Trajetória profissional em destaque",
        "Vitrine para novas oportunidades"
    ]
}, {
    id: 2,
    name: "Matheus Henrique — Portfólio anterior",
    tagline: "Uma etapa da evolução da minha presença digital",
    desc: "Versão anterior do meu portfólio, criada para reunir projetos e apresentar as tecnologias que eu utilizava. O projeto registra uma etapa importante da evolução do meu trabalho e deu lugar à versão atual do site.",
    src: "website-portfolio.png",
    stack: [stackList[1], stackList[2], stackList[5]],
    category: "web",
    categoryLabel: "Desenvolvimento web",
    projectType: "Portfólio pessoal",
    status: "Versão anterior",
    highlights: [
        "Apresentação de projetos e tecnologias",
        "Registro da evolução do portfólio"
    ]
}]

export { listProjects }
