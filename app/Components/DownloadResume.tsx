import { ArrowDownToLine } from "lucide-react";

type DownloadResumeProps = {
    className?: string;
};

const DownloadResume = ({
    className = "reveal opacity-0 p-3 pr-4 pl-4 lg:pr-6 lg:pl-6 w-3/4 lg:w-max self-center flex items-center text-sm justify-center gap-2 font-black tracking-wider text-white bg-black rounded-md hover:bg-emerald-500 hover:text-black hover:outline-black hover:outline transition-all duration-200",
}: DownloadResumeProps) => {
    return (
        <a href="/CurriculoMathen.pdf" download="CurriculoMathen.pdf" className={className}>
            Baixe meu currículo <ArrowDownToLine />
        </a>
    );
};

export default DownloadResume;
