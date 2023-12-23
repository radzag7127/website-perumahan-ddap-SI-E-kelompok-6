import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8 text-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">KONTAK AGEN GRIYA RAHAYU</h1>
        <p className="text-xl mb-8">Temukan rumah impian Anda bersama kami.</p>
      </div>

      <div className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">KIRIM KAMI PESAN</h2>

        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="reason"
            >
              Alasan menghubungi kami?
            </label>
            <select
              id="reason"
              name="reason"
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
            >
              <option>Choose a reason</option>
            </select>
          </div>

          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2 ml-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                type="text"
                placeholder="Phone Number (optional)"
              />
            </div>
            <div className="w-1/2 ml-2">
              <select className="shadow border rounded w-full py-2 px-3 text-gray-700">
                <option>Other Options</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              type="text"
              placeholder="Address (optional)"
            />
          </div>

          <div className="mb-4">
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              placeholder="Message"
              rows={4}
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Lets Connect
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
