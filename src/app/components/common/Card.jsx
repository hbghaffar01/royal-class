"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export const Card = ({ product, carousel, showArrows }) => {
  if (!product) return null;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [validImages, setValidImages] = useState([]);

  useEffect(() => {
    const checkImages = () => {
      const filteredImages = Array.isArray(product.images)
        ? product.images.filter(isImageValid)
        : [];
      setValidImages(filteredImages);
    };

    checkImages();

    let intervalId;
    if (carousel && validImages.length > 0 && !showArrows) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === validImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    }

    return () => clearInterval(intervalId);
  }, [carousel, product.images, validImages.length, showArrows]);

  const isImageValid = (url) => {
    return typeof url === "string" && url.startsWith("http");
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === validImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? validImages.length - 1 : prevIndex - 1
    );
  };

  const renderStars = () => {
    if (!product?.rating) return;
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <span key={`full-${i}`} className="text-yellow-500">
              ★
            </span>
          ))}
        {halfStar && <span className="text-yellow-500">☆</span>}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <span key={`empty-${i}`} className="text-gray-300">
              ★
            </span>
          ))}
      </>
    );
  };

  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden group w-80 my-8">
      <div className="relative h-48 flex items-center justify-center bg-[#F5F5F5]">
        {showArrows && validImages.length > 0 ? (
          <>
            <Image
              src={validImages[currentImageIndex]}
              alt={product.title}
              layout="fill"
              objectFit="contain"
              className="object-cover"
            />
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full size-5 hover:bg-gray-800"
            >
              <span className="flex items-center justify-center w-full h-full relative top-[-2px]">
                {"<"}
              </span>
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full size-5 hover:bg-gray-800"
            >
              <span className="flex items-center justify-center w-full h-full relative top-[-2px]">
                {">"}
              </span>
            </button>
          </>
        ) : carousel && validImages.length > 0 ? (
          <Image
            src={validImages[currentImageIndex]}
            alt={product.title}
            layout="fill"
            objectFit="contain"
            className="object-cover"
          />
        ) : (
          product.image && (
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="contain"
              className="object-cover"
            />
          )
        )}

        {product?.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}
          </span>
        )}

        <button className="absolute inset-0 bg-black bg-opacity-75 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 h-12 top-36">
          Add to Cart
        </button>
      </div>

      <div className="h-24 px-4 py-2">
        <h3 className="font-semibold text-gray-800">{product.title}</h3>

        <div className="flex items-center space-x-2 mt-1">
          <span className="text-red-500 font-bold text-lg">
            ${product.discounted_price}
          </span>
          <span className="text-gray-400 line-through">${product.price}</span>
        </div>

        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
          {product?.rating !== undefined ? (
            <div className="flex items-center">{renderStars()}</div>
          ) : null}

          {product?.sold !== undefined ? (
            <span className="text-red-500 font-medium">{`(${product.sold})`}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};
