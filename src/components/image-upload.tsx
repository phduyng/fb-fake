"use client";

import { UploadButton } from "@/lib/uploadthing";
import Image from "next/image";
import { useState } from "react";

const ImageUpload = () => {
  const [imageState, setImageState] = useState<string>();

  return (
    <div>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          setImageState(res[0].url);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

      {imageState?.length ? (
        <div>
          <Image src={imageState} alt="my image" width={500} height={300} />
        </div>
      ) : null}
    </div>
  );
};

export default ImageUpload;
