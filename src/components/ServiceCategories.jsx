import React from "react";

const ServiceCategories = () => {
  const categories = [
    {
      name: "Restaurantes",
      bgColor: "bg-orange-50",
      textColor: "text-rappi-red",
    },
    { name: "Turbo", bgColor: "bg-green-50", textColor: "text-green-600" },
    { name: "Mercado", bgColor: "bg-gray-100", textColor: "text-black" },
    { name: "Farmacia", bgColor: "bg-gray-100", textColor: "text-black" },
    { name: "Tu 2025", bgColor: "bg-gray-100", textColor: "text-black" },
    { name: "Tienda", bgColor: "bg-gray-100", textColor: "text-black" },
  ];
  return (
    <>
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} ${category.textColor} aspect-[1.2] rounded-xl flex items-end p-4 text-base font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 font-golos`}
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceCategories;
