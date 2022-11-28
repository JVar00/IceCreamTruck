import Location from "../components/Location";
import locations from "../data/locations";

function Locations() {
  return (
    <main>
      <div className="text-black relative flex justify-center mb-16 ">
        <div className="flex flex-col justify-center w-full sparkles py-20 md:mx-10 rounded-lg">
          <h1 className="text-4xl md:text-5xl py-2 font-extrabold font-pacifico text-center text-fuchsia-700 md:mb-8">
            Nuestras sucursales
          </h1>
          <div className="text-center flex flex-col text-sm md:text-md">
            <p>
              Visitanos dentro de nuestro horario de atention y estaremos
              encantados de atenderte.
            </p>
            <p className="text-pinktruck">¡Te esperamos!</p>
          </div>
        </div>
      </div>
      <section className="text-black relative flex justify-center mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mx-10 justify-center">
          {locations.map((element, index) => (
            <Location
              key={index}
              title={element.title}
              address={element.address}
              order={index + 1}
              image={element.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Locations;
