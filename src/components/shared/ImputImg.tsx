"use client";

import Image from "next/image";
import React, { useState } from "react";

type FileType = {
  previewURL: string;
  file: File;
};

const InputImg = () => {
  const [images, setImages] = useState<FileType[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files as FileList;
    console.log(files);

    const newImage: FileType[] = [];

    for (const file of Array.from(files)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        newImage.push({
          previewURL: e.target?.result as string,
          file,
        });
        setImages([...images, ...newImage]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="absolute top-14">
      <input
        className="hidden"
        id="img"
        type="file"
        multiple
        onChange={handleChange}
      />
      {/* {images.map((image, index) => (
        <>
          <div>{image.previewURL}</div>
          <Image
            key={index}
            src={image.previewURL}
            height={200}
            alt={`Selected Image ${index + 1}`}
            width={200}
          />
        </>
      ))} */}
    </div>
  );
};

export default InputImg;
