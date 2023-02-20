import React from "react";

interface Image {
  id: number;
  src: string;
  alt: string;
  name: string;
  role: string;
}

interface Props {
  images: Image;
}

const OfficerCard: React.FC<Props> = ({ images }) => {
  return (
    <div className="text-center w-1/2 md:w-1/4 md:gap-4 lg:w-1/6 xl:w-1/8">
      <img src={images.src} alt={images.alt} className="w-40" />

      <h1 className="font-medium text-gray-600 pt-1 xl:pr-16 ">
        {images.name}
      </h1>
      <p className="font-semibold xl:pr-16 ">{images.role}</p>
    </div>
  );
};

export default OfficerCard;
