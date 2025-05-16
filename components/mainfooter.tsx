import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () =>{
    return(
        <>
            <header className="bg-[#001220] py-7 lg:block text-[#2D2926]">
            <nav>
                    <div className="flex justify-between px-16 md:flex-col xl:flex-row">
                        <div className="flex font-bold text-2xl text-center justify-center open-sauce-one text-amber-100">Contactame en mis redes sociales, TE ESPERO!!</div>
                        <div className="flex gap-4 justify-center text-amber-100">
                        <button className=""><Link href="mailto:rafaelmallea2000@gmail.com" className="hover:text-foreground/80 text-foreground/160"><MdEmail className="text-amber-100 text-2xl"/></Link></button>
                        <button className=""><Link href="https://api.whatsapp.com/send?phone=56941541485" className="hover:text-foreground/80 text-foreground/160"><FaWhatsapp className="text-amber-100 text-2xl"/></Link></button>
                        <button className=""><Link href="/https://www.instagram.com/rxfxsthetic/" className="hover:text-foreground/80 text-foreground/160"><BsInstagram className="text-amber-100 text-2xl"/></Link></button>
                        <button className=""><Link href="https://www.linkedin.com/in/rafael-m-6915ab223/" className="hover:text-foreground/80 text-foreground/160"><BsLinkedin className="text-amber-100 text-2xl"/></Link></button>
                        </div>
                    </div>
                    
            </nav>
            </header>
        </>
    )
}

export default Footer