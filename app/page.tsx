
import Navbar from "@/components/mainnavbar";
import Footer from "@/components/mainfooter";

export default function Home() {
  return (
    <>
    <main className="">



      {/* header */}
      <section>
        <Navbar />
        <div className="h-4 shadow-xl shadow-white"></div>
      </section>

      {/* body */}
 

          <div className="flex-col justify-center py-20">
            <h3 className="text-white font-extralight text-center text-3xl">!Hola, Me presento... Soy Rafael Mallea!</h3>
            <h1 className="text-yellow-400 text-center font-bold text-4xl">Desarrollador Web Junior</h1>
          </div>


        <h3 className="text-center text-3xl px-10 mt-10 pt-5 pb-2 font-bold text-yellow-400">Creación de tu sitio web</h3>
        <p className="text-white text-center text-xl font-thin">¿Que es lo que incluye el servicio?</p>
        <h4 className="font-medium text-center mt-5 text-3xl text-blue-200">$3 <span className="text-yellow-400">UF</span></h4>

        <div className="flex justify-center py-10">
          <ul className=" border-2 shadow-2xl shadow-blue-500 border-blue-400 p-4 rounded-s-3xl rounded-br-3xl rounded-e-xl rounded-bl-xl text-white">
            <h1 className="text-center font-light mb-5 text-2xl text-yellow-400">DESARROLLO WEB</h1>
            <li><i className="bi bi-cursor pe-3"></i>Galería de imágenes</li>
            <li><i className="bi bi-cursor pe-3"></i>Diseño web <span className="font-medium text-yellow-400">ADAPTABLE</span></li>
            <li><i className="bi bi-cursor pe-3"></i>Formulario de contacto</li>
            <li><i className="bi bi-cursor pe-3"></i>Botones de contacto y Whatsapp</li>
            <li><i className="bi bi-cursor pe-3"></i>Botones a redes sociales</li>
            <li><i className="bi bi-cursor pe-3"></i>Animaciones web</li>
            <li><i className="bi bi-cursor pe-3"></i>Animaciones de scroll</li>
          </ul>
        </div>
    </main>

<Footer/>
    </>
  );
}
