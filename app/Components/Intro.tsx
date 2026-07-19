import { useEffect, useRef } from "react"

const Intro = () => {

    const introRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (introRef.current) {
            setTimeout(() => {
                introRef.current?.classList.add("animate-intro")
            }, 1800);
        }
    }, [])

    return (
        <div className="h-[95vh] w-screen flex items-center justify-center bg-black">
            <div ref={introRef} className="h-full w-screen flex items-center justify-center bg-black">
                <h1 className="animate-opacity text-3xl font-black tracking-wide text-white">
                    <span className="flex flex-col gap-1 group">
                        mathen
                        <span className="h-px border-b-2 border-white w-0.5 animate-expansion"></span>
                    </span>
                </h1>
            </div>
        </div>
    )
}

export default Intro 