import React from "react";
import Image from "next/image";

const propertyDetail = {
  imageUrl: "/rumah2.svg",
  address: "Jl. Bukit Barisan, Banyumanik, Semarang",
  price: "Rp3,7 Miliar",
  beds: "5 Beds",
  baths: "4 Baths",
  sqft: "400 Sq.Mt.",
  description: `Villa menawan di kawasan elit Banyumanik, Semarang, menawarkan kombinasi keanggunan dan kenyamanan. Berdiri di atas tanah seluas 600 m², villa ini memiliki taman yang luas dan pemandangan kota yang menakjubkan, serta dilengkapi dengan fasilitas modern untuk kenyamanan maksimal.`,
};

const RumahDetail2: React.FC = () => {
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
            <button className="bg-green-800 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
              INQUIRE NOW
            </button>
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

export default RumahDetail2;
