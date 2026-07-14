"use client"

import { Menu } from "lucide-react"
import { useState } from "react"

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const menuIsOpen = menuOpen ? "block" : "hidden"

    const handleMenu = () => {
        if (menuOpen === true) {
            setMenuOpen(false)
        }

        if (menuOpen === false) {
            setMenuOpen(true)
        }
    }

    return (
        <div className="relative sticky z-10 top-0 h-12 flex flex-row gap-2 bg-slate-800 text-white">
            <div className="flex flex-row items-center w-11/12">
                <h3 className="text-2xl font-black tracking-wider flex-1 pl-2 p-2">
                    <a href="">
                        dev mathen
                    </a>
                </h3>

                <Menu className="" onClick={handleMenu} />
            </div>

            <div className={"absolute z-20 w-3/4 flex flex-col text-black items-center bg-slate-800 h-screen top-0 right-0 p-2 gap-2 " + menuIsOpen}>
                <Menu onClick={() => setMenuOpen(false)} />
                <ul className="flex flex-col gap-2 text-lg items-center">
                    <a href="">
                        Home
                    </a>
                    <a href="">
                        Projetos
                    </a>
                    <a href="">
                        Serviços
                    </a>
                </ul>
            </div>

        </div>
    )
}

export default NavBar