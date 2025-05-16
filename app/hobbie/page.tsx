"use client";

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Navbar from "@/components/mainnavbar";

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Footer from "@/components/mainfooter";

const Hobbie = () => {
    type Hobby = {
        id: number;
        name: string;
        text: string;
    };

    const Hobbies: Hobby[] = [
        {
            id: 1,
            name: "Gimnasio",
            text: "Voy 5 dias a la semana, siempre que tengo un tiempo para poder ir, voy, trato de ir todos los dias"
        },
        {
            id: 2,
            name: "Crear Sitios Web",
            text: "se convirtio en uno de mis pasatiempo mas favoritos, ya que me encanta crear sitios web que resuelvan problemas reales. y me gusta mantenerme actualizado con las ultimas tendencias y tecnologias del mercado."
        },
        {
            id: 3,
            name: "Escuchar Musica",
            text: "escucho todo tipo de musica, cuando necesito no tener distracciones de otras personas, trato de escuchar musica, pero mi musica favorita es la electronica"
        },
        {
            id: 4,
            name: "Jugar videojuegos",
            text: "es uno de mis pasatiempo favoritos, he jugado en PC como tambien en consolas, y uno de mis juegos favoritos es el Ark, que es un videojuego de mundo abierto"
        },
        {
            id: 5,
            name: "Futbol",
            text: "voy al futbol cuando tengo tiempo libre, siempre que tengo un tiempo para poder ir, trato de ir todas las veces que pueda"
        },
        {
            id: 6,
            name: "Caminar",
            text: "Caminar es uno de mis pasatiempos favoritos, me gusta caminar por la naturaleza, y me gusta caminar en la playa"
        }
    ]
    ;

    return (

        <>
    
        {/* header */}
        <section>
          <Navbar />
        </section>

        <section className="">
            <h3 className="text-yellow-400 text-center font-bold text-4xl py-10">Conoceme un poco mas!</h3>
        </section>



        <section className=" py-19">

        <div id='Hobbies' className='py-10  relative bg-[#001220]"' >

            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    } as React.CSSProperties}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={200}
                    autoplay={{ delay: 4000 }}
                    slidesPerView={2}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: false,
                    }}
                    className="mySwiper"
                >
                    {Hobbies.map((item) => {
                        return <SwiperSlide key={item.id}>
                            <div className='h-[250px] w-[450] gap-10 flex flex-col justify-center items-center bg-[#001220] text-white border-2 shadow-2xl shadow-blue-500 border-blue-400 p-4 rounded-s-2xl py-10'>
                                <p className='py-3'>{item.text}</p>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h3 className='font-semibold text-yellow-400 text-lg'>{item.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper>
                <div className='swiper-pagination text-yellow-400 gap-1 relative'></div>
            </div>

        </div>
        </section>
<Footer/>
        </>
    )
}

export default Hobbie