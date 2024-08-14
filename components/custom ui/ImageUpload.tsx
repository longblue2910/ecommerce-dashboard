import { CldUploadWidget } from "next-cloudinary";
import { Button } from "../ui/button";

const ImageUpload = () => {
  return (
    <CldUploadWidget uploadPreset="rimdasilva">
      {({ open }) => {
        return <Button onClick={() => open()}>Upload an Image</Button>;
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
