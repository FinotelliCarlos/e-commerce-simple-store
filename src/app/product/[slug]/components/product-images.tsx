"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="mb-8 flex flex-col">
      <div className="sm:relative sm:h-full">
        <div className="flex h-full min-h-[380px] items-center justify-center bg-accent sm:rounded-lg md:min-h-[630px]">
          <Image
            src={currentImage}
            alt={name}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        <div className="mt-8 grid grid-cols-4 gap-2 px-5 sm:absolute sm:left-1 sm:top-1 sm:flex sm:flex-col ">
          {imageUrls.map((imageUrl) => (
            <button
              key={imageUrl}
              className={`flex h-[80px] w-[80px] items-center justify-center rounded-lg bg-accent sm:h-[60px] sm:w-[60px] sm:bg-zinc-950 md:h-[80px] md:w-[80px]
                ${
                  imageUrl === currentImage &&
                  "border-2 border-solid border-primary"
                }
            `}
              onClick={() => handleImageClick(imageUrl)}
            >
              <Image
                src={imageUrl}
                alt={name}
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto max-h-[70%] w-auto max-w-[80%]"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
