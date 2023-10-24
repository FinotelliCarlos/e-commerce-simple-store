import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

const PromoBanner = ({ alt, className, ...props }: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className={twMerge("h-auto", className)}
      sizes="100vw"
      alt={alt}
      {...props}
    />
  );
};

export default PromoBanner;
