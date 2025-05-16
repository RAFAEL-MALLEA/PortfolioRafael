import Image from "next/image";
import Navbar from "@/components/mainnavbar";
import Footer from "@/components/mainfooter"; // Adjust the path as necessary
import Link from "next/link";

export default function proyectos() {
  return (
    <>
    <main className=""></main>

      {/* header */}
      <section>
        <Navbar />
      </section>
      
    <main className="">
    <h3 className="text-center text-3xl px-10 mt-10 pt-5 pb-2 font-bold text-yellow-400">Mis Proyectos</h3>
    <p className="text-white text-center text-xl font-thin">Te invito a revisar cada uno de los proyectos que he ido realizando a lo largo de mi carrera</p>
    
    <section className="flex justify-center columns-1 sm:columns-2 md:columns-3 lg:columns-4">
            <div className="flex text-white w-[400px] h-[300px] m-10 shadow-2xl shadow-blue-500 border-blue-400 p-4 rounded-2xl">
                <div className="flex-col justify-center items-center">
                  <h1 className="text-center text-amber-300">Portafolio Web</h1>
                    <Image src="/portafoliorafael.png" alt="Imagen portada desarrollador web" width={400} height={400} />
                    <div className="flex justify-center  text-center py-10">
                      <Link className="bg-indigo-600 py-2 px-4 rounded-3xl text-white  font-semibold border-2 border-white underline underline-offset-2 hover:bg-indigo-950  " href="/contacto">visualizar</Link>
                    </div>
                </div>
            </div>            
            
            
            <div className="flex text-white w-[400px] h-[300px] m-10 shadow-2xl shadow-blue-500 border-blue-400 p-4 rounded-2xl">
                <div className="flex-col justify-center items-center">
                  <h1 className="text-center text-amber-300">Pagina web Victoria Galarza</h1>
                    <Image src="/victoriagalarza.png" alt="Imagen portada desarrollador web" width={400} height={400} />
                    <div className="flex justify-center  text-center py-10">
                      <Link className="bg-indigo-600 py-2 px-4 rounded-3xl text-white  font-semibold border-2 border-white underline underline-offset-2 hover:bg-indigo-950  " href="/contacto">visualizar</Link>
                    </div>
                </div>
            </div>


            <div className="flex text-white w-[400px] h-[300px] m-10 shadow-2xl shadow-blue-500 border-blue-400 p-4 rounded-2xl">
                <div className="flex-col justify-center items-center">
                  <h1 className="text-center text-amber-300">Pagina web Activa Arte</h1>
                    <Image src="/enproceso.jpg" alt="Imagen portada desarrollador web" width={400} height={400}/>
                    <div className="flex justify-center  text-center py-10">
                      <a className="bg-indigo-600 py-2 px-4 rounded-3xl text-white  font-semibold border-2 border-white underline underline-offset-2 hover:bg-indigo-950  " href="/contacto">visualizar</a>
                    </div>
                </div>
            </div>

            <div className="flex text-white w-[400px] h-[300px] m-10 shadow-2xl shadow-blue-500 border-blue-400 p-4 rounded-2xl">
                <div className="flex-col justify-center items-center">
                  <h1 className="text-center text-amber-300">Pagina web Giovanni Zamora</h1>
                    <Image src="/enproceso.jpg" alt="Imagen portada desarrollador web" width={400} height={400}/>
                    <div className="flex justify-center  text-center py-10">
                      <a className="bg-indigo-600 py-2 px-4 rounded-3xl text-white  font-semibold border-2 border-white underline underline-offset-2 hover:bg-indigo-950  " href="/contacto">visualizar</a>
                    </div>
                </div>
            </div>
    
    </section>

    <section className="flex justify-center ">
            <div className="flex text-white w-[400px] h-[300px] m-10 shadow-2xl shadow-blue-500 border-blue-400 p-4 rounded-2xl">
                <div className="flex-col justify-center items-center">
                  <h1 className="text-center text-amber-300">Portafolio Benjamin Barberia</h1>
                    <Image src="/enproceso.jpg" alt="Imagen portada desarrollador web" width={400} height={400} />
                    <div className="flex justify-center  text-center py-10">
                      <Link className="bg-indigo-600 py-2 px-4 rounded-3xl text-white  font-semibold border-2 border-white underline underline-offset-2 hover:bg-indigo-950  " href="/contacto">visualizar</Link>
                    </div>
                </div>
            </div>            
            
            
            <div className="flex text-white w-[400px] h-[300px] m-10 shadow-2xl shadow-blue-500 border-blue-400 p-4 rounded-2xl">
                <div className="flex-col justify-center items-center">
                  <h1 className="text-center text-amber-300">Pagina web Matias White</h1>
                    <Image src="/enproceso.jpg" alt="Imagen portada desarrollador web" width={400} height={400} />
                    <div className="flex justify-center  text-center py-10">
                      <Link className="bg-indigo-600 py-2 px-4 rounded-3xl text-white  font-semibold border-2 border-white underline underline-offset-2 hover:bg-indigo-950  " href="/contacto">visualizar</Link>
                    </div>
                </div>
            </div>
    </section>

    </main>
<Footer/>
    </>
  );
}