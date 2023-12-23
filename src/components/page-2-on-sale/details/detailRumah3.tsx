import React from "react";

const propertyDetail = {
  imageUrl: "/rumah4.svg",
  address: "Jl. Jend. Sudirman, Yogyakarta",
  price: "Rp4,2 Miliar",
  beds: "3 Beds",
  baths: "3 Baths",
  sqft: "300 Sq.Mt.",
  description: `Apartemen penthouse mewah di pusat Kota Yogyakarta. Menawarkan pemandangan kota yang mempesona dan desain interior modern. Dengan fasilitas keamanan 24 jam dan akses mudah ke berbagai fasilitas kota, apartemen ini ideal untuk gaya hidup urban yang dinamis.`,
};

const RumahDetail3: React.FC = () => {
  return (
    <div
      className="bg-white text-gray-800"
      style={{
        backgroundImage: 'url("/background.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center items-center">
        <img src={propertyDetail.imageUrl} alt="Property" />
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
                <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gray-600 bg-gray-800 p-2 rounded-full"
              >
                <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gray-600 bg-gray-800 p-2 rounded-full"
              >
                <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
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

export default RumahDetail3;
