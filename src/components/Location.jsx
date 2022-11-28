function location({ title, address, image }) {
  return (
    <div className="flex flex-col xl:flex-row shadow hover:shadow-md  bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-in-out my-5 ">
      <img className="object-cover w-full h-48" src={image} alt={title} />
      <div className="relative p-4">
        <h3 className="text-base md:text-xl font-medium text-gray-800">
          {title}
        </h3>
        <p className="mt-4 text-base md:text-lg text-gray-600">{address}</p>
      </div>
    </div>
  );
}

export default location;
