import React from "react";
import icecream from "../assets/icrecream.jpg";
import logo from "../assets/truckpng.png";
import waveb from "../assets/waveb.svg";
import wavet from "../assets/wavet.svg";

function AboutUs() {
  return (
    <main>
      {/* Logo y descripcion */}
      <section className="text-black relative flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col text-center ">
            <img
              src={logo}
              className="w-1/3 block mx-auto"
              alt="Delicream Logo"
            />
            <h1 className="text-3xl md:text-4xl font-pacifico text-pinktruck">
              Deli Cream
            </h1>
            <p className="text-2xl font-medium font-pacifico pb-1">
              más helado, más felicidad
            </p>
          </div>
          <div className="flex flex-col justify-center mx-4 md:mx-0 my-10 md:my-0 md:mr-10">
            <h1 className="text-3xl md:text-4xl py-2 font-extrabold font-pacifico  text-fuchsia-700 md:mb-8">
              Nosotros
            </h1>
            <div className="flex flex-col text-sm  md:text-md ">
              <p className="">
                Somos un servicio de ICE CREAM TRUCK (carro de helados) 100%
                costarricense que va dirigido tanto a todos los amantes de los
                helados artesanales, tenemos los mejores helados para satisfacer
                todos los gustos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Imagen y Descripcion */}
      <div className="relative">
        <img src={waveb} className="absolute bottom-0"></img>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-full bg-pinktruck py-32 md:py-60">
            <div className="text-center md:text-right flex flex-col mx-4 lg:mt-10 xl:mt-20">
              <h1 className="text-2xl md:text-4xl font-extrabold font-pacifico text-white mb-12">
                A que nos dedicamos?
              </h1>
              <p className="text-md">
                Nuestro servicio está enfocado en las heladerías, y el propósito
                de este es facilitarles a los usuarios la adquisición del
                producto, por medio ICE CREAM TRUCK (carro de helados), este es
                un servicio que estará cada cierto tiempo en un sector distinto.
              </p>
            </div>
          </div>
          <div>
            <img src={icecream} className="block md:h-full"></img>
          </div>
        </div>
        <img src={wavet} className="absolute top-0"></img>
      </div>

      {/* Vision y Mision */}
      <div className="text-black relative flex justify-center mb-16 mx-5 rounded-xl mt-10 md:mt-0">
        <div className="md:w-1/2">
          <div className="flex flex-col justify-center mb-10 mx-4 md:ml-4">
            <h1 className="text-3xl md:text-4xl py-2 font-extrabold font-pacifico text-center text-fuchsia-700 md:mb-8">
              Mision
            </h1>
            <div className="text-center flex flex-col text-sm md:text-md">
              <p className="">
                Permitir al consumidor adquirir el producto con una mayor
                facilidad, de manera que, no dependa exclusivamente de una
                heladería para hacer la compra, por el contrario, pueda tener
                alternativas accesibles que se adapten a su estilo de vida o
                bien a las actividades que diariamente realiza.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center  md:mr-4 mb-10">
            <h1 className="text-3xl md:text-4xl py-2 font-extrabold font-pacifico text-center text-fuchsia-700 md:mb-8">
              Vision
            </h1>
            <div className="text-center flex flex-col text-sm mx-4 md:text-md ">
              <p className="">
                Ser la mejor marca con sabores innovadores y deliciosos,
                logrando posicionarnos como la mejor empresa de helados en el
                sector de Naranjo, Palmares y San Ramón.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
