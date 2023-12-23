import React from "react";
import type { FC } from "react";
import Carousel from "../Carousel";
import TestimonialCard from "./testi-card";
import { dataTestimoni } from "./data-testimoni";

const Pencapaian: FC = () => {
  return (
    <div className="bg-white py-10">
      <h2 className="font-bold text-5xl text-center text-black mb-20">
        Testimoni Kami
      </h2>
      <div className="container mx-auto items-center">
        <Carousel
          options={{ dragFree: false, align: "start" }}
          containerClassName="flex justify-center items-center"
        >
          {dataTestimoni.map((testimoni) => (
            <TestimonialCard
              key={testimoni.name}
              name={testimoni.name}
              title={testimoni.title}
              testimonial={testimoni.testimonial}
              imageSrc={testimoni.imageSrc}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Pencapaian;
