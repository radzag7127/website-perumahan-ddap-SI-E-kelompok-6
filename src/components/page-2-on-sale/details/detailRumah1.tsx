import React from "react";
import Image from "next/image";

const propertyDetail = {
  imageUrl: "/rumah1.svg",
  address: "Jl. Pahlawan, Magelang",
  price: "Rp2,5 Miliar",
  beds: "4 Beds",
  baths: "3 Baths",
  sqft: "350 Sq.Mt.",
  description: `Temukan kombinasi sempurna antara kenyamanan urban dan ketenangan alam di rumah bergaya modern ini, terletak di kawasan hijau Kota Magelang. Dengan luas tanah 500 m² dan bangunan 350 m², rumah ini dirancang dengan arsitektur kontemporer, menawarkan pencahayaan alami yang melimpah dan ventilasi yang baik. Dilengkapi dengan kolam renang pribadi, garasi untuk 2 mobil, dan taman belakang yang asri, rumah ini siap menjadi oasis pribadi Anda.`,
};

const RumahDetail1: React.FC = () => {
  return (
    <div
      className="bg-white text-gray-800"
      style={{
        backgroundImage: 'url("/background.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="flex justify-center items-center relative"
        style={{ height: "640px" }}
      >
        <Image
          src={propertyDetail.imageUrl}
          alt="Property"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full xl:w-[1280px]">
        <div className="w-full max-w-3xl px-4 py-8">
          <h1 className="text-4xl font-bold mb-4 text-center">
            {propertyDetail.address}
          </h1>
          <div className="text-3xl text-gray-900 text-center">
            {propertyDetail.price}
          </div>
          <div className="text-gray-600 text-center my-4">
            {propertyDetail.beds} | {propertyDetail.baths} |{" "}
            {propertyDetail.sqft}
          </div>
          <div className="flex justify-center">
          <a href="/contact">
  <button className="bg-green-800 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
    INQUIRE NOW
  </button>
</a>

          </div>

          <div className="text-center my-8">
            <h2 className="text-2xl font-bold mb-2">DESCRIPTION</h2>
            <p className="text-gray-600">{propertyDetail.description}</p>
          </div>

          <div className="text-center my-8">
            <h2 className="text-2xl font-bold mb-2">SHARE PROPERTY</h2>
            <div className="flex justify-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gray-600 bg-gray-800 p-2 rounded-full"
              >
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gray-600 bg-gray-800 p-2 rounded-full"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gray-600 bg-gray-800 p-2 rounded-full"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>

          <div className="text-center my-8">
            <h2 className="text-2xl font-bold mb-2">LOCATION</h2>
            <p className="text-gray-600">{propertyDetail.address}</p>
          </div>

          <div className="text-center my-8">
            <h2 className="text-2xl font-bold mb-2">STATUS</h2>
            <p className="text-gray-600">For Sale</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RumahDetail1;
