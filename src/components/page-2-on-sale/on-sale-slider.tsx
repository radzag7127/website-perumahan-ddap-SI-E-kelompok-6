import React from "react";
import Carousel from "../Carousel";
import { dataPerumahan } from "../data-perumahan/data-perumahan";
import OnSaleCard from "./on-sale-card";

const OnSaleSlider = () => {
  return (
    <div
      className="text-black pt-20"
      style={{
        backgroundImage: 'url("/backgrounds.svg")', 
        backgroundSize: "cover", 
        backgroundPosition: "center",
      }}
    >
      <div className="lg:mx-36">
        <Carousel options={{ dragFree: false, align: "start" }}>
          {dataPerumahan.map((perumahan, index) => (
            <OnSaleCard
              key={index}
              gambar={perumahan.gambar}
              deskripsi={perumahan.deskripsi}
              harga={perumahan.harga}
              className="sm:flex-[0_0_33%] flex-[0_0_100%] pl-[40px]"
            />
          ))}
        </Carousel>
      </div>

      <div className="flex justify-center mt-4">
        <a
          href="/details"
          className="text-white bg-green-800 hover:bg-green-600 font-semibold py-2 px-4 rounded"
        >
          View Details
        </a>
      </div>
    </div>
  );
};
export default OnSaleSlider;
