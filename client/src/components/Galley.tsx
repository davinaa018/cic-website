import React from "react";
import data from "../images.json";

interface Image {
  id: number;
  src: string;
  alt: string;
}

const Galley: React.FC = () => {
  const images: Image[] = data.images;
  return (
    <section className="overflow-hidden text-gray-700 w-full">
      <div className=" px-5 py-2 mx-auto lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2 ">
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={images[0].src}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 ">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg "
                src={images[6].src}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={images[2].src}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={images[3].src}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={images[4].src}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={images[5].src}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galley;
