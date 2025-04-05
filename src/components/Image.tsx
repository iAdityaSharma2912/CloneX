"use client";
import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
type Imagetype = {
  path: string;
  height: number;
  width: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

const Image = ({ path, height, width, alt, className, tr }: Imagetype) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      alt={alt}
      {...(tr
        ? { transformation: [{ width: `${width}`, height: `${height}` }] }
        : { width: width, height: height })}
    />
  );
};

export default Image;
