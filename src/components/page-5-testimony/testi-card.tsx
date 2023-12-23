import React from "react";

interface TestimonialCardProps {
  name: string;
  title: string;
  testimonial: string;
  imageSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  testimonial,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col items-center bg-gray-300 p-6 shadow-md m-5 sm:m-2 sm:flex-[0_0_100%] md:flex-[0_0_50%] xl:flex-[0_0_33%]">
      <img
        src={imageSrc}
        alt={name}
        className="w-20 h-20 object-cover rounded-full mb-4"
      />
      <h5 className="text-lg font-bold">{name}</h5>
      <p className="text-sm text-gray-500 mb-4">{title}</p>
      <p className="text-sm text-gray-600 text-center">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
