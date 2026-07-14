import { useEffect, useRef } from "react"

const Intro = () => {

    const introRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (introRef.current) {
            setTimeout(() => {
                introRef.current?.classList.add("animate-intro")
            }, 1500);
        }
    }, [])

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-black">
            <div ref={introRef} className="h-full w-screen flex items-center justify-center bg-black">
                <h1 className="animate-opacity text-3xl font-black tracking-wide text-white">
                    mathen
                </h1>
            </div>
        </div>
    )
}

export default Intro 