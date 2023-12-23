"use client";

import React, { FC } from "react";

interface OnSaleCardProps {
  gambar: string;
  deskripsi: string;
  harga: string;
  className?: string;
}

const OnSaleCard: FC<OnSaleCardProps> = ({
  gambar,
  deskripsi,
  harga,
  className,
}) => {
  return (
    <div className={`card ${className}`}>
      <img
        src={gambar}
        alt="Gambar Properti"
        className="w-full aspect-video md:aspect-square object-cover object-top rounded-md"
      />
      <div className="p-2.5">
        <p className="text-green-900 text-lg font-bold">{harga}</p>
        <p className="text-gray-700 text-md">{deskripsi}</p>
      </div>
    </div>
  );
};

export default OnSaleCard;
