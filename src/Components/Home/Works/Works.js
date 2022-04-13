import React from "react";
import { useState } from "react";

const Works = () => {
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb"></nav>

        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
              alt="#"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
                alt="#"
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
                alt="#"
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
              alt="#"
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
