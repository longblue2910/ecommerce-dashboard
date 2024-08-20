"use client";

import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <ClipLoader />
    </div>
  );
};

export default Spinner;
