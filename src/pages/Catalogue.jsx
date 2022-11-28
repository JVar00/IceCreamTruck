import React from "react";

import IceCream from "../components/IceCream/IceCream";
import IceCreams from "../data/iceCreams";

const Catalogue = () => {
  return (
    <main>
      <div className="text-black relative flex justify-center mb-16 ">
        <div className="flex flex-col justify-center w-full sparkles py-20 md:mx-10 rounded-lg">
          <h1 className="text-4xl md:text-5xl py-2 font-extrabold font-pacifico text-center text-fuchsia-700 md:mb-8">
            Nuestros Helados
          </h1>
          <div className="text-center flex flex-col text-sm md:text-md">
            <p className="">Te presentamos nuestros helados más populares.</p>
            <p className="text-pinktruck">
              ¡Adelante sin miedo, te va a encantar!
            </p>
          </div>
        </div>
      </div>
      <section className="text-black relative flex justify-center mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {IceCreams.map((element, index) => (
            <IceCream
              key={index}
              title={element.title}
              likes={element.likes}
              order={index + 1}
              image={element.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Catalogue;
