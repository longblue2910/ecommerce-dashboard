"use client";

import { CldUploadWidget } from "next-cloudinary";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageUploadProps {
  value: string[];
  onChange: (value: string[]) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  value,
}) => {
  const [localValue, setLocalValue] = useState<string[]>(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const onUpload = (result: any) => {
    if (result.info?.secure_url) {
      onChange(result.info.secure_url);
      setLocalValue((prev) => [...prev, result.info.secure_url]);
    }
  };

  console.log(localValue);

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {localValue.length > 0 ? (
          localValue.map((url) => (
            <Image
              src={url}
              alt="collection"
              width={200}
              height={200}
              key={url}
              className="object-cover rounded-lg"
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
      <CldUploadWidget
        uploadPreset="rimdasilva"
        onSuccess={(result, { widget }) => {
          onUpload(result);
          widget.close();
        }}
        onQueuesEnd={(result, { widget }) => {
          widget.close();
        }}
      >
        {({ open }) => (
          <Button onClick={() => open()} className="bg-grey-1 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Upload an Image
          </Button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
