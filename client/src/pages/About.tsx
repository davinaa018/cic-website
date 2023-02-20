import React from "react";
import OfficerCard from "../components/OfficerCard";
import data from "../officers.json";

interface Image {
  id: number;
  src: string;
  alt: string;
  name: string;
  role: string;
}

const About: React.FC = () => {
  const images: Image[] = data.officers;
  return (
    <div className="px-5 pt-5 text-center">
      <h1 className="font-bold text-xl underline xl:pr-12">
        Mission Statement
      </h1>
      <p className="font-medium pl-4 pt-2 pb-4 xl:pr-8">
        Our Mission is to prepare others for interviews and help them succeed by
        helping them develop their technical skills. We want to create a place
        where people interested in coding and problem-solving can help and
        support each other and thus create a better community.
      </p>

      <h1 className="font-bold text-xl underline  xl:pr-14">Officers</h1>
      <div className="flex flex-wrap w-full items-center justify-center gap-6 py-5 ">
        {images.map((image: Image) => (
          <OfficerCard key={image.id} images={image} />
        ))}
      </div>
    </div>
  );
};

export default About;
