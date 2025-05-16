import Link from "next/link";
import React from "react";

const Navbar = () =>{
    return(
        <>
            <header className="bg-[#001220] py-7 hidden lg:block text-[#2D2926]">
            <nav>
                    <div className="flex justify-between px-16 md:flex-col xl:flex-row">
                        <div className="flex font-bold text-2xl text-center justify-center open-sauce-one text-amber-100">Rafael Mallea</div>
                        <div className="flex gap-4 justify-center text-amber-100">
                        <button className="border-b"><Link href="/" className="hover:text-foreground/80 text-foreground/160">Home</Link></button>
                        <button className="border-b"><Link href="/sobremi" className="hover:text-foreground/80 text-foreground/160">Sobre mi</Link></button>
                        <button className="border-b"><Link href="/certificaciones" className="hover:text-foreground/80 text-foreground/160">Certificaciones</Link></button>
                        <button className="border-b"><Link href="/hobbie" className="hover:text-foreground/80 text-foreground/160">Hobbie</Link></button>
                        <button className="border-b"><Link href="/Proyectos" className="hover:text-foreground/80 text-foreground/160">Proyectos</Link></button>
                        </div>
                    </div>
                    
            </nav>
            </header>
        </>
    )
}

export default Navbar